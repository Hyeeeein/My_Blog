import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="max-w-[1100px] mx-auto my-0 pt-[70px]">
      {/* 헤더 */}
      <div className="flex justify-between items-center">
        <div className="flex text-[24px] space-x-5">
          <FaFacebookF color="#175BEB" />
          <FaTwitter color="#1DA1F2" />
          <FaInstagram color="#F12BB2" />
          <FaRss color="#F26624" />
        </div>
        <h1 className="text-6xl	text-[#4B4870] font-bold first-letter:text-uRed align-middle">
          Maktub
        </h1>
        <button className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-uRed">
          <FiSearch color="white" className="w-[17px] h-[17px]" />
        </button>
      </div>

      {/* 메뉴바 */}
      <div className="my-10">
        <ul className="flex justify-center w-fit mx-auto px-4 bg-white font-serif shadow-custom">
          <li className="group relative">
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              Home
              <MdOutlineKeyboardArrowDown className="ml-1" />
            </a>
            <ul className="w-max absolute top-[105%] left-[-15px] bg-white py-3 shadow-custom opacity-0 duration-300 group-hover:opacity-100">
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Home Posts Slider
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Home Posts Carousel
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Home Category Carousel
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Home Minimal
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Home Classic with Sidebar
              </li>
            </ul>
          </li>

          <li className="group relative">
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              Header Styles
              <MdOutlineKeyboardArrowDown className="ml-1" />
            </a>
            <ul className="w-max absolute top-[105%] left-[-15px] bg-white py-3 shadow-custom opacity-0 duration-300 group-hover:opacity-100">
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Minimalist Style
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Classic Style
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Notice on Top
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Advertising Area
              </li>
            </ul>
          </li>

          <li className="group relative">
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              Post Features
              <MdOutlineKeyboardArrowDown className="ml-1" />
            </a>
            <ul className="w-max absolute top-[105%] left-[-15px] bg-white py-3 shadow-custom opacity-0 duration-300 group-hover:opacity-100">
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Post Formats
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Fullwidth with Sidebar
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Fullwidth no Sidebar
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Classic with Sidebar
              </li>
            </ul>
          </li>

          <li className="group relative">
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              #Tag
              <MdOutlineKeyboardArrowDown className="ml-1" />
            </a>
            <ul className="w-max absolute top-[105%] left-[-15px] bg-white py-3 shadow-custom opacity-0 duration-300 group-hover:opacity-100">
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                # Lifestyle
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                # Music
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                # Travel
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                # Technology
              </li>
            </ul>
          </li>

          <li>
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              Author
            </a>
          </li>

          <li className="group relative">
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              Features
              <MdOutlineKeyboardArrowDown className="ml-1" />
            </a>
            <ul className="w-max absolute top-[105%] left-[-15px] bg-white py-3 shadow-custom opacity-0 duration-300 group-hover:opacity-100">
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Style Guide
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Gutenberg Blocks
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Buttons
              </li>
              <li className="px-4 py-2.5 text-[14px] hover:text-uRed cursor-pointer">
                Accordions and Tabs
              </li>
            </ul>
          </li>

          <li>
            <a
              href=""
              className="flex items-center px-3 py-3 text-[15px] duration-300 font-semibold hover:text-uRed"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
