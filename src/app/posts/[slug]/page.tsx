import { IPostDataRes, getAllPosts, getPostContent } from "@/util/posts";
import Image from "next/image";
import { RiFileCopyLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRss,
  FaGlobeAsia,
} from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const data: IPostDataRes = await getPostContent(slug);

  return (
    <div className="pr-[50px]">
      <div className="w-full shadow-custom2 bg-white">
        <div className="relative w-full h-[434px] flex justify-center items-center after:absolute after:z-[5] after:w-[99%] after:h-[98%] after:border-2 after:border-white">
          <Image
            className="object-cover w-full h-full"
            src="https://themes.estudiopatagon.com/wordpress/maktub/wp-content/uploads/2019/07/4464833-950x500.jpg"
            alt={data.title}
            fill
            priority
          />
        </div>
        <div className="px-[60px] py-[50px]">
          <h2 className="mb-5 text-3xl text-center font-bold text-[#454360]">
            {data.title}
          </h2>
          <p className="flex justify-center text-[#596172] font-serif space-x-5 mb-[45px]">
            <span>{data.date}</span>
            <span className="flex items-center">
              <HiOutlineChatBubbleOvalLeft className="text-uRed mr-1" />
              {data.comments}
            </span>
            <span className="flex items-center">
              <AiOutlineFire className="text-uRed mr-1" />
              {data.comments}
            </span>
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: data.contents.textOne }}
            className="text-[#596172] font-serif leading-10"
          >
            {/* {data.contents.textOne} */}
          </p>
          <div className="relative w-full h-[434px] my-6">
            <Image src={data.contents.image} alt={data.title} fill />
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: data.contents.textTwo }}
            className="text-[#596172] font-serif leading-10"
          >
            {/* {data.contents.textTwo} */}
          </p>
          <div className="my-[50px] flex flex-col items-center">
            <strong className="text-[#454360]">Categorized in:</strong>
            <div className="mt-[25px] flex gap-[10px] text-[#4b4870]">
              {data.categories.map((category) => (
                <button
                  key={category}
                  className="px-2 py-1 bg-uWhite shadow-custom2 text-[14px]"
                >
                  # {category}
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div className="py-[50px] flex flex-col items-center">
            <strong className="mb-[25px] text-[#454360]">Share Article:</strong>
            <div className="w-4/6 pl-[25px] pr-[60px] py-[15px] relative flex items-center bg-[#f9f9fe] border border-[#f0f0fd]">
              <span className="w-full overflow-hidden whitespace-nowrap text-[#596172] font-serif">
                https://themes.estudiopatagon.com/wordpress/maktub/a-small-river-named-duden-flows-by-their-place/
              </span>
              <RiFileCopyLine
                size={20}
                className="absolute right-[20px] text-uRed"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div>
          <Image
            src="/image/avatar-11.jpg"
            alt="프로필 사진"
            width={74}
            height={74}
          />
          <div>
            <h3>Kim Hyein</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div>
          hello! My name is Kim Hyein. I enjoy and love the whole process of
          designing and creating my own website.
        </div>
        <ul>
          <li>
            <a href="">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaGlobeAsia />
            </a>
          </li>
        </ul>

        <a
          href=""
          className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-2/4 border-2 border-[#4b4870]"
        >
          <span className="inline-block px-[25px] py-[8px] bg-[#4b4870] text-[17px] text-white duration-500 hover:-translate-x-1 hover:-translate-y-1">
            View All Articles
          </span>
        </a>
      </div>

      <div>
        <h3>Related Articles</h3>
        <ul className="mt-7 space-y-7">
          {[1, 2, 3].map((item) => (
            <li key={item} className="flex">
              <Image
                className="flex-shrink-0 h-[60px]"
                src="/image/avatar-10.jpg"
                alt="Far far away, behind the word mountains"
                width={60}
                height={60}
              />
              <div className="ml-4">
                <p className="font-bold text-[15px]">
                  Far far away, behind the word mountains
                </p>
                <p className="font-serif text-[12px]">August 15, 2019</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {data.prev && data.next && (
        <div>
          <h3>Other Stories</h3>
          <div>
            <div>
              <Image
                src={data.prev.image}
                alt={data.prev.title}
                width={75}
                height={75}
              />
              <div>
                <strong>{data.prev.title}</strong>
                <p>Previous Story</p>
              </div>
            </div>
            <div>
              <div>
                <strong>{data.next.title}</strong>
                <p>Previous Story</p>
              </div>
            </div>
            <Image
              src={data.next.image}
              alt={data.next.title}
              width={75}
              height={75}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;

// 많이 이용하는 페이지에 한에서 ssr
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.id.toString(), // number 타입이라서 string 으로 변환
  }));
}
