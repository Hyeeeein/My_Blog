import { IPost, getAllPosts } from "@/util/posts";
import Main from "../components/posts/Main";
import Portal from "@/components/Portal";
import SlideMain from "./../components/slide/SlideMain";

export default async function HomePage() {
  const posts: IPost[] = await getAllPosts();

  return (
    <>
      <Portal>
        {/* @ts-expect-error Server Component */}
        <SlideMain />
      </Portal>
      <Main allPosts={posts} />
    </>
  );
}
