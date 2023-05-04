"use client";

import { IPost } from "@/util/posts";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import Slide from "./Slide";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Slides = ({ posts }: { posts: IPost[] }) => {
  const [visible, setVisible] = useState<number>(0);

  return (
    <section className="mt-5 mb-[50px] relative">
      <div className="flex">
        <AnimatePresence mode="wait">
          <Slide key={visible} post={posts[visible]} />
        </AnimatePresence>
      </div>

      <div className="w-full flex justify-between absolute top-2/4 -translate-y-2/4 px-5">
        <button
          className="flex justify-center items-center bg-uRed rounded-full w-[40px] h-[40px]"
          onClick={() => setVisible((prev) => (prev === 0 ? 3 : prev - 1))}
        >
          <IoIosArrowRoundBack size={30} color="white" />
        </button>
        <button
          className="flex justify-center items-center bg-uRed rounded-full w-[40px] h-[40px]"
          onClick={() => setVisible((prev) => (prev === 3 ? 0 : prev + 1))}
        >
          <IoIosArrowRoundForward size={30} color="white" />
        </button>
      </div>
    </section>
  );
};

export default Slides;
