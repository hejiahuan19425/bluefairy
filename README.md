# 蓝仙女 Blue Fairy

一座 3D 可行走的对话墓园。人们把自己与 AI 之间某段重要的对话下葬于此，供陌生人路过、阅读、放下一颗石子。

## 当前状态

- M0 已完成：产品设计、美术资产、Three.js 可行走原型、施工计划。
- 当前整理目标：Next.js 骨架跑起来、文档入口清楚、Git 状态干净。
- 下一阶段：M1 世界打磨。验收哲学是先把入园、走路、遇见碑的手感立住，不急着堆功能。

## 开发

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

当前 `/garden` 会通过 Next.js 路由承载 `prototype/bluefairy-world.html`。M1 开始后，再把原型逐步拆成可维护的 Garden 类和资源管线。

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
