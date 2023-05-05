import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

/* 모든 포스트 */
export type IPost = {
  id: number;
  title: string;
  date: string;
  comments: number;
  description: string;
  likes: number;
  categories: string[];
  image: string;
};

/* 포스트 상세 */
export type IPostData = {
  contents: {
    textOne: string;
    image: string;
    textTwo: string;
  };
};

export type IPostDataRes = IPost & {
  next: IPost | null;
  prev: IPost | null;
};

export interface IPaginatePost {
  posts: IPost[];
  totalPage: number;
}

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return readFile(filePath, "utf-8").then<IPost[]>(JSON.parse);
});

export const getSlidePosts = async () => {
  const posts = await getAllPosts();
  const filteredPosts = posts.sort((a, b) => b.likes - a.likes);
  return filteredPosts.slice(0, 4);
};

/* 페이지 함수 */
// export const getPagiNatePosts = async (page: number) => {
//   const posts = await getAllPosts();
//   const startNum = (page - 1) * 3;
//   const endNum = page * 3;
//   const totalPage = Math.ceil(posts.length / 3);
//   return { posts: posts.slice(startNum, endNum), totalPage };
// };

// export const getPagiNatePosts = async (allPosts: IPost[], page: number) => {
//   const startNum = (page - 1) * 3;
//   const endNum = page * 3;

//   const posts = [...allPosts];

//   return posts.slice(startNum, endNum);
// };

/* 포스트 상세 */
export async function getPostContent(id: string): Promise<IPostDataRes> {
  const filePath = path.join(process.cwd(), "data", "posts", `${id}.json`);
  // 모든 포스트를 불러와서 fileName 과 맞는 path 를 가지고 있는 객체 정보들을 metadata 에 담기
  const posts = await getAllPosts();
  const post = posts.find((post) => post.id === Number(id));

  if (!post) throw new Error(`${id}에 해당하는 포스트를 찾을 수 없습니다.`);

  // 이전, 다음 컨텐츠 정보
  const index = posts.indexOf(post);
  const next = index === 0 ? null : posts[index - 1];
  const prev = index === posts.length ? null : posts[index + 1];
  const contents = await readFile(filePath, "utf-8").then<IPostData[]>(
    JSON.parse
  );

  const res = { ...post, ...contents, next, prev };

  return res;
}
