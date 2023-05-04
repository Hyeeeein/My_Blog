"use client";

import { useState } from "react";
import { IPost } from "@/util/posts";
import Pagination from "./Pagination";
import Post from "./Post";

const Main = ({ allPosts }: { allPosts: IPost[] }) => {
  const [page, setPage] = useState<number>(1);

  const totalPage = Math.ceil(allPosts.length / 3);

  const updatePosts = allPosts.slice((page - 1) * 3, page * 3);

  return (
    <section className="pr-[50px]">
      <ul className="w-full flex flex-col">
        {updatePosts.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>

      <Pagination totalPage={totalPage} page={page} setPage={setPage} />
    </section>
  );
};

export default Main;
