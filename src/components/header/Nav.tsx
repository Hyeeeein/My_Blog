"use client";

import { capitalize } from "@/util/capitalize";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export type ObjectType = {
  [key: string]: string[] | [];
};

export const categories: ObjectType = {
  home: [
    "Home Posts Slider",
    "Home Posts Carousel",
    "Home Category Carousel",
    "Home Minimal",
    "Home Classic with Sidebar",
  ],
  "header Styles": [
    "Minimalist Style",
    "Classic Style",
    "Notice on Top",
    "Advertising Area",
  ],
  "post Features": [
    "Post Formats",
    "Fullwidth with Sidebar",
    "Fullwidth no Sidebar",
    "Classic with Sidebar",
  ],
  tag: ["lifestyle", "music", "travel", "technology"],
  author: [],
  features: [
    "Style Guide",
    "Gutenberg Blocks",
    "Buttons",
    "Accordions and Tabs",
  ],
  contact: [],
};

export interface Props {
  top: boolean;
}

const Nav = ({ top }: Props) => {
  // console.log(categories["contact"] ? categories["contact"][0] : null);

  return (
    <nav className={`${top ? "" : "my-10"}`}>
      <ul
        className={`flex justify-center w-fit mx-auto px-4 bg-white font-serif ${
          top ? "" : "shadow-custom"
        }`}
      >
        {Object.keys(categories).map((oneDepth: string) => (
          <li key={oneDepth} className="group relative">
            <Link
              href={
                oneDepth === "home"
                  ? "/"
                  : categories[oneDepth]?.length === 0
                  ? `/${oneDepth}` // 왜 에러?
                  : `/${oneDepth}/${categories[oneDepth][0]}`
              }
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              {oneDepth === "tag"
                ? `#${capitalize(oneDepth)}`
                : capitalize(oneDepth)}
              {categories[`${oneDepth}`].length !== 0 && (
                <MdOutlineKeyboardArrowDown className="ml-1" />
              )}
            </Link>
            <ul className="w-max absolute top-[105%] left-[-15px] z-20 bg-white py-3 shadow-custom2 opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible">
              {categories[oneDepth] &&
                categories[oneDepth]?.map((twoDepth: string) => (
                  <li
                    key={twoDepth}
                    className="text-[14px] hover:text-uRed cursor-pointer"
                  >
                    <Link
                      className="inline-block px-4 py-2.5"
                      href={`/${oneDepth}/${twoDepth}`}
                    >
                      {oneDepth === "tag"
                        ? `# ${capitalize(twoDepth)}`
                        : twoDepth}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
