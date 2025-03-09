import { getTodo } from "@/app/data-access/todo";

export default async function Posts() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Posts</h2>
      </main>
    </div>
  );
}
