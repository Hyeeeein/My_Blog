import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
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

const Header = () => {
  return (
    <header className="max-w-[1100px] mx-auto pt-[70px]">
      {/* 헤더 */}
      <div className="flex justify-between items-center">
        <div className="basis-1/4 flex text-[24px] space-x-5">
          <FaFacebookF color="#175BEB" />
          <FaTwitter color="#1DA1F2" />
          <FaInstagram color="#F12BB2" />
          <FaRss color="#F26624" />
        </div>
        <h1 className="basis-1/2 text-center text-6xl	text-[#4B4870] font-bold first-letter:text-uRed align-middle">
          Maktub
        </h1>
        <div className="basis-1/4">
          <button className="ml-auto w-[44px] h-[44px] flex justify-center items-center rounded-full bg-uRed">
            <FiSearch color="white" className="w-[17px] h-[17px]" />
          </button>
        </div>
      </div>

      {/* 메뉴바 */}
      <div className="my-10">
        <ul className="flex justify-center w-fit mx-auto px-4 bg-white font-serif shadow-custom">
          {Object.keys(categories).map((oneDepth: string) => (
            <li key={oneDepth} className=" relative">
              <a
                href=""
                className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed group"
              >
                {oneDepth}
                {categories[`${oneDepth}`] && (
                  <MdOutlineKeyboardArrowDown className="ml-1" />
                )}
              </a>
              <ul className="w-max absolute top-[105%] left-[-15px] bg-white py-3 shadow-custom opacity-0 duration-300 group-hover:opacity-100">
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
      </div>
    </header>
  );
};

export default Header;
