import React from "react";
import Slides from "./Slides";
import { getSlidePosts } from "@/util/posts";

const SlideMain = async () => {
  const posts = await getSlidePosts();
  return (
    <div>
      <Slides posts={posts} />
    </div>
  );
};

export default SlideMain;
