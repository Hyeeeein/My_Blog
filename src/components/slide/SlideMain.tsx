import React from "react";
import Slides from "./Slides";
import { getSlidePosts } from "@/util/posts";

const SlideMain = async () => {
  const posts = await getSlidePosts();
  return (
    <section>
      <Slides posts={posts} />
    </section>
  );
};

export default SlideMain;
