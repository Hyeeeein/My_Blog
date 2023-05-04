import { IPost } from "@/util/posts";
import Image from "next/image";
import { motion } from "framer-motion";

const Slide = ({ post }: { post: IPost }) => {
  return (
    <motion.div
      // transition={{ bounce: 0 }}
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      exit={{ x: 70 }}
      className="w-full h-[460px] relative flex justify-center items-center"
    >
      <Image
        className="object-cover w-full h-full -z-10"
        src={`/image/slide_${post.id + 1}.png`}
        alt="post image"
        fill
        priority
      />
      <div className="max-w-[700px] h-full m-auto flex flex-col justify-center items-center">
        <ul className="flex">
          {post.categories.map((category) => (
            <li key={category}>
              <button># {category}</button>
            </li>
          ))}
        </ul>

        <h2 className="text-center text-[50px] text-white [text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]">
          {post.title}
        </h2>

        <p>{post.date}</p>

        <div className="flex">
          <span>K</span>
          <span>Kim Hyein</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide;
