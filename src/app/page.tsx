import { IPost, getAllPosts } from "@/util/posts";
import Main from "../components/posts/Main";

export default async function HomePage() {
  const posts: IPost[] = await getAllPosts();

  return (
    <div className="w-full">
      <Main allPosts={posts} />
    </div>
  );
}
