import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <section className="threshold" aria-labelledby="site-title">
        <p className="kicker">BLUE FAIRY</p>
        <h1 className="title" id="site-title">
          蓝仙女
        </h1>
        <p className="summary">
          一座公开的对话墓园。人们把自己与 AI 之间某段重要的对话下葬于此，供陌生人路过、阅读、放下一颗石子。
        </p>
        <nav className="actions" aria-label="主要入口">
          <Link className="action primary" href="/garden">
            入园
          </Link>
          <Link className="action" href="/bury">
            下葬
          </Link>
        </nav>
        <nav className="small-links" aria-label="辅助入口">
          <Link href="/claim">认碑</Link>
          <Link href="/rules">墓园规约</Link>
        </nav>
      </section>
    </main>
  );
}
