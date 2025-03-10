import { fetchTodos } from "@/app/data-access/todo";
import Link from "next/link";

export default async function Todos() {
  const todos = await fetchTodos();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Todos</h2>
        {todos ? (
          <div>
            {todos.map((todo) => (
              <div key={todo.id}>
                {todo.id}.{" "}
                <Link href={`/todos/${todo.id}`}>
                  {todo.title.slice(0, 50)}...
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No todos available</p>
        )}
      </main>
    </div>
  );
}
