"use client";

import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export type ObjectType = {
  [key: string]: string[] | null;
};

export const categories: ObjectType = {
  Home: [
    "Home Posts Slider",
    "Home Posts Carousel",
    "Home Category Carousel",
    "Home Minimal",
    "Home Classic with Sidebar",
  ],
  "Header Styles": [
    "Minimalist Style",
    "Classic Style",
    "Notice on Top",
    "Advertising Area",
  ],
  "Post Features": [
    "Post Formats",
    "Fullwidth with Sidebar",
    "Fullwidth no Sidebar",
    "Classic with Sidebar",
  ],
  "#Tag": ["# Lifestyle", "# Music", "# Travel", "# Technology"],
  Author: null,
  Features: [
    "Style Guide",
    "Gutenberg Blocks",
    "Buttons",
    "Accordions and Tabs",
  ],
  Contact: null,
};

export interface Props {
  top: boolean;
}

const Nav = ({ top }: Props) => {
  return (
    <nav className={`${top ? "" : "my-10"}`}>
      <ul
        className={`flex justify-center w-fit mx-auto px-4 bg-white font-serif ${
          top ? "" : "shadow-custom"
        }`}
      >
        {Object.keys(categories).map((oneDepth: string) => (
          <li key={oneDepth} className="group relative">
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              {oneDepth}
              {categories[`${oneDepth}`] && (
                <MdOutlineKeyboardArrowDown className="ml-1" />
              )}
            </a>
            <ul className="w-max absolute top-[105%] left-[-15px] z-20 bg-white py-3 shadow-custom2 opacity-0 invisible duration-300 group-hover:opacity-100 group-hover:visible">
              {categories[`${oneDepth}`] &&
                categories[`${oneDepth}`]?.map((twoDepth: string) => (
                  <li
                    key={twoDepth}
                    className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer"
                  >
                    {twoDepth}
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
