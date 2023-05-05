import { IPostDataRes, getAllPosts, getPostContent } from "@/util/posts";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const data: IPostDataRes = await getPostContent(slug.toString());

  return <div>page {data.title}</div>;
};

export default PostPage;

// 많이 이용하는 페이지에 한에서 ssr
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}
