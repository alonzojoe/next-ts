import { fetchPosts } from "@/app/data-access/posts";
import Link from "next/link";

export default async function Posts() {
  const posts = await fetchPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Posts</h2>
        {posts ? (
          <div>
            {posts.map((post) => (
              <div key={post.id}>
                {post.id}.{" "}
                <Link href={`/posts/${post.id}`}>
                  {post.title.slice(0, 50)}...
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts available</p>
        )}
      </main>
    </div>
  );
}
