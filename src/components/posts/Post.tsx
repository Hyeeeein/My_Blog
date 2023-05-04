import { IPost } from "@/util/posts";
import React from "react";
import Image from "next/image";
import { AiOutlineFire } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

const Post = ({ post }: { post: IPost }) => {
  return (
    <li
      key={post.id}
      className="mb-[70px] px-[60px] py-[50px] relative bg-white shadow-custom2"
    >
      <div className="flex items-center">
        <Image
          className="flex-shrink-0 h-[120px] mr-[30px]"
          src={post.image}
          alt={post.title}
          width={120}
          height={120}
        />
        <div className="">
          <h3 className="text-[38px] font-bold text-[#454360]">{post.title}</h3>
          <p className="flex text-[#596172] font-serif space-x-5 text-[15px]">
            <span>{post.date}</span>
            <span className="flex items-center gap-2">
              <HiOutlineChatBubbleOvalLeft size={18} className="text-uRed" />
              {post.comments}
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineFire size={18} className="text-uRed" />
              {post.likes}
            </span>
          </p>
        </div>
      </div>

      <p className="mt-[35px] mb-[60px] font-serif text-[17px] text-[#596172] leading-[30px]">
        {post.description}
      </p>

      <div className="w-full flex justify-between items-center">
        <div className="flex">
          {post.categories.map((category: string) => (
            <button
              className="mr-3 px-2 py-1 bg-uWhite shadow-custom2 text-[14px]"
              key={category}
            >
              # {category}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <Image
            className="mr-2 shadow-custom rounded-full"
            src="/image/avatar-11.jpg"
            alt="프로필 이미지"
            width={35}
            height={35}
          />
          <h4 className="text-[#596172] text-[15px]">Mary Buzard</h4>
        </div>
      </div>

      <a
        href=""
        className="px-[25px] py-[8px] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-2/4 bg-[#4b4870] text-[17px] text-white"
      >
        Continue Reading
      </a>
    </li>
  );
};

export default Post;
