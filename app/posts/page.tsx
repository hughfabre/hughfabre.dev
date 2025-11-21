import { PostListItem } from "@/components/posts/post-list-item";
import { PostsEmpty } from "@/components/posts/posts-empty";
import { getAllPosts } from "@/lib/content/posts";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

const LoadingSkeleton = () => (
  <div className="space-y-6">
    <div className="animate-pulse h-16 bg-muted rounded" />
    <div className="animate-pulse h-16 bg-muted rounded" />
  </div>
);

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 pb-8">
      {posts.length === 0 ? (
        <PostsEmpty />
      ) : (
        <>
          <h1 className="text-3xl font-medium mb-8 mt-0">Posts</h1>
          <Suspense fallback={<LoadingSkeleton />}>
            <div className="space-y-6">
              {posts.map((post) => (
                <PostListItem key={post.slug} post={post} />
              ))}
            </div>
          </Suspense>
        </>
      )}
    </main>
  );
}
