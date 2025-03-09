import { getPost } from "@/app/data-access/posts";

type Params = {
  id: number;
};

export default async function Post({ id }: Params) {
  const post = await getPost(id);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">Selected Post</h2>
        {post ? (
          <div>
            <div key={post.id}>
              {post.id}. <span>{post.title.slice(0, 50)}...</span>
            </div>
          </div>
        ) : (
          <p>Post not found</p>
        )}
      </main>
    </div>
  );
}
