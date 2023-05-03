import { Post, getAllPosts } from "@/util/posts";
import Image from "next/image";
import { AiOutlineFire } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

export default async function HomePage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="w-full flex flex-col gap-4 pr-[50px]">
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className="px-[60px] py-[50px] bg-white shadow-custom2"
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
              <h3 className="text-[38px] font-bold text-[#454360]">
                {post.title}
              </h3>
              <p className="flex text-[#596172]">
                <span>{post.date}</span>
                <span className="flex items-center">
                  <HiOutlineChatBubbleOvalLeft /> {post.comments}
                </span>
                <span className="flex items-center">
                  <AiOutlineFire /> {post.likes}
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
        </div>
      ))}
    </div>
  );
}
