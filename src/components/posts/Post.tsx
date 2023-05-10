import { IPost } from "@/util/posts";
import React from "react";
import Image from "next/image";
import { AiOutlineFire } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

type Props = {
  post: IPost;
  small?: boolean;
};

const Post = ({ post, small }: Props) => {
  // function translateStyle(small: boolean) {
  //   return
  // }

  function detail(small: boolean) {
    return (
      <p
        className={`flex justify-center text-[#596172] font-serif space-x-5 text-[15px] ${
          small ? "mt-8" : ""
        }`}
      >
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
    );
  }

  return (
    <li
      key={post.id}
      className={`${
        small ? "px-[30px] py-[30px]" : "px-[60px] py-[50px] mb-[70px]"
      } relative bg-white shadow-custom2`}
    >
      <div className="flex items-center">
        <Image
          className={`flex-shrink-0 ${small ? "mr-[20px]" : "mr-[30px]"}`}
          src={post.image}
          alt={post.title}
          width={small ? 75 : 120}
          height={small ? 75 : 120}
        />
        <div className="">
          <h3
            className={`${
              small ? "text-[22px] leading-6" : "text-[38px]"
            } font-bold text-[#454360]`}
          >
            {post.title}
          </h3>
          {!small && detail(false)}
        </div>
      </div>
      {small && detail(true)}

      <p
        className={`font-serif text-[17px] text-[#596172] leading-[30px] ${
          small ? "mt-[20px] mb-[40px] text-center" : "mt-[35px] mb-[60px]"
        }`}
      >
        {small ? post.description.slice(0, 100) + "..." : post.description}
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

      {small ? null : (
        <a
          href={`/posts/${post.id}`}
          className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-2/4 border-2 border-[#4b4870]"
        >
          <span className="inline-block px-[25px] py-[8px] bg-[#4b4870] text-[17px] text-white duration-500 hover:-translate-x-1 hover:-translate-y-1">
            Continue Reading
          </span>
        </a>
      )}
    </li>
  );
};

export default Post;
