import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Next App</h2>
        <div className="flex items-center gap-3">
          <Link href="/posts" className="text-indigo-600 text-2xl font-bolder">
            Posts
          </Link>
          <span className="text-2xl font-bold">|</span>
          <Link href="/todos" className="text-indigo-600 text-2xl font-bolder">
            Todos
          </Link>
        </div>
      </main>
    </div>
  );
}
