import { getTodo } from "@/app/data-access/todo";

export default async function Todos({
  params,
}: {
  params: { todoId: number };
}) {
  const todo = await getTodo(params.todoId);
  console.log("todo", todo);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Selected Todo</h2>
        {todo ? (
          <>
            <p>
              {todo.id}. {todo.title}{" "}
              <span className="font-bold">
                Status: {todo.completed ? "Completed" : "Pending"}
              </span>
            </p>
          </>
        ) : (
          <p>Todo not found</p>
        )}
      </main>
    </div>
  );
}
