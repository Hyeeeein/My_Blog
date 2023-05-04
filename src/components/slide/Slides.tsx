"use client";

import { IPost } from "@/util/posts";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import Slide from "./Slide";

const Slides = ({ posts }: { posts: IPost[] }) => {
  const [visible, setVisible] = useState<number>(0);

  return (
    <section className="mt-5 mb-[50px]">
      <AnimatePresence>{<Slide post={posts[visible]} />}</AnimatePresence>
      <button onClick={() => setVisible((prev) => (prev === 0 ? 0 : prev - 1))}>
        prev
      </button>
      <button onClick={() => setVisible((prev) => (prev === 3 ? 3 : prev + 1))}>
        next
      </button>
    </section>
  );
};

export default Slides;
