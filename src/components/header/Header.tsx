"use client";

import Scroll from "@/util/scroll";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import TopNav from "./TopNav";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const scroll = Scroll();

  return (
    <header className="max-w-[1240px] mx-auto pt-[70px]">
      <AnimatePresence>{scroll >= 250 && <TopNav />}</AnimatePresence>
      {/* 헤더 */}
      <div className="flex justify-between items-center">
        <div className="basis-1/4 flex text-[24px] space-x-2">
          <a href="" className="p-2">
            <FaFacebookF color="#175BEB" />
          </a>
          <a href="" className="p-2">
            <FaTwitter color="#1DA1F2" />
          </a>
          <a href="" className="p-2">
            <FaInstagram color="#F12BB2" />
          </a>
          <a href="" className="p-2">
            <FaRss color="#F26624" />
          </a>
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
      <Nav top={false} />
    </header>
  );
};

export default Header;
