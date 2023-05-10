import { categories } from "@/components/header/Nav";
import Post from "@/components/posts/Post";
import { getTagPosts } from "@/util/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params: { slug } }: Props) => {
  const posts = await getTagPosts(slug);

  return (
    <div className="w-full">
      <ul className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} small />
        ))}
      </ul>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const tags = Object.keys(categories);
  return tags.map((tag) => ({
    slug: tag,
  }));
}
