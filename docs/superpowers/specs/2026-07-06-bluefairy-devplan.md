# 蓝仙女开发文档（施工计划）

- 版本：v1.0 ｜ 2026-07-06
- 依据：《蓝仙女设计文档》v2.0（含世界化附录）
- 节奏假设：以周末为单位推进（考研优先，园子不急）；每个里程碑收尾时可运行、可展示

---

## 〇、已完成（M0）

- 产品设计定稿：碑（双层/两型）、无名有钥（Ed25519）、路过与指路、守墓人两道防线、石子规则
- 美术圣经入库：日夜概念图、角色三视图、四张无缝贴图（接缝已验证）
- 3D 可行走原型 v2：Three.js 世界、WASD+摇杆+QR 视角、真实时间昼夜、月亮星空、园心主碑、David NPC（脚本台词）、读碑/放石子/指路交互
- 仓库：git 已建，assets/ 与 prototype/ 齐备

---

## 一、总架构

```
Next.js (App Router, Vercel)
├─ 前端
│   ├─ /            门口（入园）
│   ├─ /garden      园（Three.js 世界，client component）
│   ├─ /bury        下葬流程（分步仪式）
│   ├─ /tomb/[id]   碑的直达页（指路落地页，可从园外直接读碑）
│   ├─ /find /claim /rules
│   └─ lib/crypto   Web Crypto Ed25519 封装（生成/签名/验签请求）
├─ API Routes（服务端）
│   ├─ POST /api/bury        入园审（Claude API）→ 写库
│   ├─ GET  /api/tombs       园内碑列表（含世界坐标，分页）
│   ├─ GET  /api/pass        加权随机抽一块碑
│   ├─ POST /api/stone       放石子（IP+指纹粗防重）
│   ├─ POST /api/report      举报（碑转 buried 待复审）
│   ├─ POST /api/remove      迁碑（挑战-验签-删除，两步）
│   ├─ POST /api/david       守墓人对话（Claude API+碑文记忆）
│   └─ GET  /api/patrol      夜巡（cron-job.org 定时触发，带密钥）
└─ Supabase (Postgres)
```

**Three.js 集成方式**：沿用原型的原生 Three.js，封装为一个 Garden 类挂进 client component（不引入 React Three Fiber，减少心智负担；原型代码可大块复用）。

## 二、数据库（Supabase）

```sql
create table tombs (
  id            uuid primary key default gen_random_uuid(),
  kind          text not null check (kind in ('dialogue','monologue')), -- 对话碑/独白碑
  epitaph       text not null check (char_length(epitaph) <= 60),
  excerpt       jsonb not null,          -- [{role:'h'|'ai'|'me', text}] 独白碑 role 恒为 me
  full_text     text,                    -- 可空：碑下全文
  happened_at   text not null,           -- 'YYYY-MM'
  public_key    text not null,           -- base64url Ed25519 公钥（即碑址坐标）
  status        text not null default 'active', -- active|buried|removed
  world_x       real not null,           -- 世界坐标（服务端分配）
  world_z       real not null,
  visit_count   int  not null default 0,
  created_at    timestamptz default now()
);
create table stones (
  id         bigint generated always as identity primary key,
  tomb_id    uuid references tombs(id) on delete cascade,
  visitor    text not null,              -- ip+ua 哈希，防重不识人
  created_at timestamptz default now(),
  unique (tomb_id, visitor)
);
create table reports (
  id         bigint generated always as identity primary key,
  tomb_id    uuid references tombs(id) on delete cascade,
  visitor    text not null,
  created_at timestamptz default now(),
  unique (tomb_id, visitor)
);
```

RLS 全开、仅服务端 service key 读写；前端一律走 API routes。

**碑的世界坐标分配**（服务端，下葬时）：沿路网按序落位——每条路两侧交替、间距 2.5~4m 随机、离路 2~6m 随机；一段路满员则从园心延伸新的路段（Catmull-Rom 控制点追加），路网因此随下葬生长。算法纯函数化，方便回放与测试。

## 三、里程碑

### M1 · 世界打磨（原型 → 像样的园子）
- [x] 树与碑的疏密节奏：按概念图重排（近路密、深林疏、丘周留白）
- [x] 碰撞：树干与碑的圆柱碰撞体，玩家不可穿透；丘坡改用高度采样
- [x] 行走动画：斗篷摆动+轻微起伏替代滑步；待机时呼吸感
- [ ] 环境音接入真素材（freesound CC0：鸟鸣/风/夜虫），昼夜切换音景（夜林已接入；白天鸟鸣/风待素材）
- [ ] 性能预算：手机中端机 45fps+；draw call 合批（碑与树 InstancedMesh）
- [x] 微信内置浏览器实测（importmap 兼容性→改打包）：2026-07-14 真机反馈直接可用
- 验收：手机上顺滑走完全园，撞不穿树，昼夜两个音景

### M2 · 数据长出碑（世界接 Supabase）
- [ ] 建库建表+RLS；Next.js 项目初始化，原型代码迁入 /garden
- [ ] GET /api/tombs：园子启动时拉取碑列表，按 world 坐标实例化
- [ ] 碑面 LOD：远处只是石头，走近 8m 加载碑文浮牌（防一次性渲染全部文本）
- [ ] GET /api/pass 加权随机（`order by random()*(visit_count+1) limit 1`），/tomb/[id] 直达页（园外可读，含「入园寻它」按钮传送到碑前）
- 验收：手动往库里塞 30 块假碑，园中走到哪读到哪

### M3 · 下葬与墓钥（密码学闭环）
- [ ] lib/crypto：Ed25519 生成/导出（bf- 前缀 base64url 种子）/签名；单元测试
- [ ] /bury 五步仪式：贴文自动切分勾选节选 → 写碑文 → 选年月与碑型 → 守墓人审 → 墓钥仅展示一次（复制/下载 .txt）+碑址与公钥
- [ ] POST /api/bury：服务端调 Claude 入园审（普通拒/危机拒附资源/停灵补审三态）→ 分配世界坐标 → 入库
- [ ] /claim 认碑（本地推导公钥查碑）、/find 寻碑（公钥→碑）
- [ ] POST /api/remove 迁碑：GET 挑战串 → 本地签名 → 验签删除
- 验收：完整走一遍葬-寻-认-迁；丢钥场景文案到位

### M4 · 守墓人上岗（AI 两道防线 + David 活了）
- [ ] 入园审 prompt 定稿（广告/恶意/未成年人/他人隐私/危机五类；输出结构化判定）
- [ ] GET /api/patrol 夜巡：复查近 48h 入园碑，cron-job.org 每日触发（带 secret）
- [ ] 举报链路：碑角「···」→ POST /api/report → 覆土 → 你收 Feishu 通知复审（复用 AI观察 的推送管线）
- [ ] POST /api/david：Claude API 对话，system 注入守墓人人设+该访客葬过的碑（凭墓钥会话内认领后才注入，未认领则只聊园子）；限流
- [ ] 《墓园规约》页
- 验收：五类违规样本各测一条；David 能聊起"你葬的那段对话"

### M5 · 石子与打磨
- [ ] POST /api/stone + 世界内石子实时落下动画；碑脚石子按数量渐积（视觉聚合，无数字）
- [ ] 指路：碑前复制 /tomb/[id] 链接；微信内分享卡片（og 标签：碑文做描述）
- [ ] 门口页、加载体验（进园 loading 做成"推门"过场）、prefers-reduced-motion 全链路
- [ ] 文案通读：全站不出现技术错误码，守墓人口吻统一
- 验收：邀请 3~5 个朋友真实下葬并互相路过，收一轮反馈

### M6 · 开园
- [ ] 域名（候选查册：bluefairy.love / lanxiannv.com / 其他）+ Vercel 绑定
- [ ] 一号碑仪式：把今晚这段对话葬上丘顶（碑文我们一起写）
- [ ] 小红书发园记（xhs-post-writer），ChainCatcher 圈内朋友转一转
- [ ] 监控：Vercel Analytics + Supabase 用量告警；Claude API 用量上限
- 上线定义：任何陌生人可入园、下葬、路过、放石子，守墓人全程在岗

### P1 · 开园之后（记账不承诺）
- David 问路导航（"带我去石子最多的碑"，提灯引路）
- 独白碑的衍生：写给某人的信、周年回访提醒（凭墓钥订阅）
- 路网生长的可视化（老访客发现园子变大了）
- 真 3D 升级评估、多语言、WeChat 小程序壳

## 四、风险与对策

- **微信内置浏览器 WebGL/importmap 兼容**：M1 就实测，不行则 Vite 打包+降级静态夜景
- **Claude API 成本**：入园审用 Haiku 级即可；David 对话限流（每访客每日 N 轮）并设月度预算熔断
- **内容风险**：危机内容响应文案 M4 单独评审一轮（借念念五级框架收敛为两级）
- **私钥丢失投诉**：下葬页三重明示+下载兜底；立场坚定：丢钥即交出，这是产品承诺的一部分
- **你时间被考研挤压**：每个 M 都是独立可停的台阶,停在任何一级园子都完整可跑

## 五、环境与密钥清单

- Vercel：项目 + 域名
- Supabase：URL / service_role key（仅服务端）
- Anthropic API key（入园审+夜巡+David）
- cron-job.org：夜巡定时（GET /api/patrol?secret=…）
- Feishu webhook（举报与夜巡告警，复用 AI观察 管线）

---

## 追加（2026-07-14 复审后）

**M1 收口小尾巴（M2 开工前补）**：白昼音景第二轨并做完整昼夜淡入淡出。已完成：一号碑仿写全文补回 PLACEHOLDER 标注、待机呼吸感。

**M3 增补**：墓钥卡片图生成（canvas 渲染，含碑址二维码）；「弃钥下葬」选项；POST /api/epitaph 碑文七日一修（挑战-验签，服务端校验 created_at+7d 与修改次数）；excerpt role 宽松化。

**M5 增补**：门口「只是路过」2D 通道与 3D 延迟加载；石子防重从宽实现。

**P1 增补**：AI 下葬 API 文档化 + llms.txt。
