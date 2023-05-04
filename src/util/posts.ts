import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export interface IPost {
  id: number;
  title: string;
  date: string;
  comments: number;
  likes: number;
  description: string;
  categories: string[];
  image: string;
}

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
