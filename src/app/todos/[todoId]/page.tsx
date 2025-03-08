import { getTodo } from "@/app/data-access/todo";

export default async function Todos({
  params,
}: {
  params: { todoId: number };
}) {
  const todo = await getTodo(params.todoId);
  console.log("todo", todo);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Todos Page</h2>
        <p>{todo?.title}</p>
      </main>
    </div>
  );
}
