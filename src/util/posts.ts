import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export interface Post {
  id: number;
  title: string;
  date: string;
  comments: number;
  likes: number;
  description: string;
  categories: string[];
  image: string;
}

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return readFile(filePath, "utf-8").then<Post[]>(JSON.parse);
});
