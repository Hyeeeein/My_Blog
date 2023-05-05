import { IPost } from "@/util/posts";
import Image from "next/image";
import { motion } from "framer-motion";

export const textShadow = "[text-shadow:_3px_3px_5px_rgba(0,0,0,0.5)]";

const Slide = ({ post }: { post: IPost }) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[460px] relative flex justify-center items-center after:w-[99%] after:h-[98%] after:border-white after:border-2 after:absolute after:top-2/4 after:left-2/4 after:-translate-x-2/4 after:-translate-y-2/4 before:w-full before:h-full  before:bg-[rgba(0,0,0,0.05)]"
    >
      <Image
        className="object-cover w-full h-full -z-10"
        src={`/image/slide_${post.id + 1}.png`}
        alt="post image"
        fill
        priority
      />
      <div
        className={`max-w-[700px] h-full m-auto flex flex-col justify-center items-center absolute z-10 text-white ${textShadow}`}
      >
        <ul className="flex space-x-[10px] text-lg">
          {post.categories.map((category) => (
            <li key={category}>
              <a className="px-2 py-[6px] " href="">
                # {category}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-[30px] mb-5 text-center text-[50px] font-bold">
          {post.title}
        </h2>

        <p className="font-serif">{post.date}</p>

        <div className="mt-[30px] flex items-center">
          <span className="w-[35px] h-[35px] mr-[10px] flex justify-center items-center bg-uRed rounded-full">
            K
          </span>
          <span>Kim Hyein</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Slide;
