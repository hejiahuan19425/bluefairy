# 蓝仙女 Blue Fairy

一座 3D 可行走的对话墓园。人们把自己与 AI 之间某段重要的对话下葬于此，供陌生人路过、阅读、放下一颗石子。

## 当前状态

- M0 已完成：产品设计、美术资产、Three.js 可行走原型、施工计划。
- 项目接手整理已完成：Next.js 骨架可运行、文档入口清楚、Git 状态干净。
- M1 未收口，正在按 2026-07-13 复审意见修正。任何里程碑收口前必须逐条核对 devplan 检查表，未完成项如实列出。

## M1 复审修正

- 已完成：`/prototype/bluefairy-world` 由 Next route 承载 HTML，Three.js 与原型脚本构建为本地 bundle，不再使用 CDN importmap。
- 已完成：树与普通碑改为 `InstancedMesh` 合批；一号碑保留独立对象以支持交互发光。
- 已完成：玩家与树干、普通碑、一号碑、David 的圆柱碰撞体，不可直接穿透。
- 已完成：丘坡高度改为从实际丘体向下采样，不再沿用距离数学近似。
- 已完成：碑总量控制为 14 块普通碑 + 1 块一号碑，并拉开深林留白。
- 已完成：待机呼吸感、David 深蓝灰配色回调、一号碑全文 placeholder 标注。
- 未完成：真实 Freesound CC0 环境音素材接入。Freesound 原始下载需要登录，不能用合成音或非 CC0 素材替代。
- 未完成：微信内置浏览器真机实测。当前已移除 importmap 风险，但仍需要真机给出“直接可用 / 需改打包 / 需降级”的结论。

## 需要产品方补的素材

请登录 Freesound 下载并放入 `assets/audio/`，文件名建议如下：

- `day-birds-wind.mp3`：birds and wind.mp3 by swhic，Creative Commons 0  
  https://freesound.org/people/swhic/sounds/349175/
- `night-forest.wav`：NC Night Forest.wav by Lasdimot，Creative Commons 0  
  https://freesound.org/people/Lasdimot/sounds/405515/
- `day-cicadas-wind-birds.wav`：CICADAS - LIGHT WIND - BIRDS CATALUNYA - SPAIN by Juno24，Creative Commons 0  
  https://freesound.org/people/Juno24/sounds/845256/

素材到位后再做昼夜双音景淡入淡出和常驻静音开关。

## 开发

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。如果 3000 端口被占用，可换端口运行，例如 `npm run dev -- -p 3001`。

当前原型入口：

- 本地：`/prototype/bluefairy-world`
- 线上：https://bluefairy.vercel.app/prototype/bluefairy-world

## 阅读顺序

1. `HANDOFF.md`
2. `docs/superpowers/specs/2026-07-05-bluefairy-design.md`
3. `docs/superpowers/specs/2026-07-06-bluefairy-devplan.md`
4. `prototype/bluefairy-world.html`

## 产品红线

- 无账号、无登录、无邮箱。
- 归属只靠 Ed25519 墓钥；私钥只在本地生成、只展示一次、永不上传。
- 石子永远不显示数字。
- 路过是访问少者优先的加权随机，不做热榜。
- 下葬必须经过守墓人审核。
- David 只有在访客凭墓钥认领后，才可获得该访客碑文记忆。

## 密钥纪律

- 所有密钥只进入环境变量，不能硬编码、不能提交。
- `ANTHROPIC_API_KEY` 只允许在服务端 API routes 使用，不能进入客户端组件。
- 夜巡端点必须带 `PATROL_SECRET` 校验，拒绝无 secret 访问。

## 环境变量

复制 `.env.example` 为 `.env.local`，按里程碑补齐。

- M2：Supabase URL / service role key / Vercel 项目。
- M4：Anthropic API key / Feishu webhook / patrol secret。
