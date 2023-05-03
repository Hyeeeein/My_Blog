import Image from "next/image";
import React from "react";
import img from "/public/image/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-150x150.jpg";
import profile from "/public/image/avatar-10.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRss,
  FaGlobeAsia,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <ul className="max-w-[1400px] m-auto grid grid-cols-4 text-[#454360] ">
        <li className="px-9 py-12 first:pl-5">
          <h3 className="w-full flex items-center text-2xl font-bold">
            <span className="flex-shrink-0">Latest Articles</span>
            <span className="w-full h-[2px] ml-[15px] bg-uRed"></span>
          </h3>
          <ul className="mt-7 space-y-7">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex">
                <Image
                  className="flex-shrink-0 h-[60px]"
                  src={img}
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
        </li>

        <li className="px-9 py-12">
          <h3 className="w-full flex items-center text-2xl font-bold">
            <span className="flex-shrink-0">Tag Cloud</span>
            <span className="w-full h-[2px] ml-[15px] bg-uRed"></span>
          </h3>
          <ul className="flex flex-wrap mt-7 text-[14px]">
            <li className="mr-3 mb-3">
              <button className="px-2 py-1 bg-uWhite shadow-custom">
                # Health
              </button>
            </li>
            <li className="mr-3 mb-3">
              <button className="px-2 py-1 bg-uWhite shadow-custom">
                # Lifestyle
              </button>
            </li>
            <li className="mr-3 mb-3">
              <button className="px-2 py-1 bg-uWhite shadow-custom">
                # Music
              </button>
            </li>
            <li className="mr-3 mb-3">
              <button className="px-2 py-1 bg-uWhite shadow-custom">
                # Technology
              </button>
            </li>
            <li className="mr-3 mb-3">
              <button className="px-2 py-1 bg-uWhite shadow-custom">
                # Travel
              </button>
            </li>
            <li className="mr-3 mb-3">
              <button className="px-2 py-1 bg-uWhite shadow-custom">
                # Video
              </button>
            </li>
          </ul>
        </li>

        <li className="px-9 py-12">
          <h3 className="w-full flex items-center text-2xl font-bold">
            <span className="flex-shrink-0">Follow Me!</span>
            <span className="w-full h-[2px] ml-[15px] bg-uRed"></span>
          </h3>
          <ul className="grid grid-cols-4 gap-2 mt-7">
            <li className="w-full">
              <button className="w-full h-16 flex justify-center items-center bg-[#1DA1F2]">
                <FaTwitter color="white" size={23} />
              </button>
            </li>
            <li className="w-full">
              <button className="w-full h-16 flex justify-center items-center bg-[#175BEB]">
                <FaFacebookF color="white" size={23} />
              </button>
            </li>
            <li className="w-full">
              <button className="w-full h-16 flex justify-center items-center bg-[#F12BB2]">
                <FaInstagram color="white" size={23} />
              </button>
            </li>
            <li className="w-full">
              <button className="w-full h-16 flex justify-center items-center bg-[#F26624]">
                <FaRss color="white" size={23} />
              </button>
            </li>
          </ul>
        </li>

        <li className="px-9 py-12 last:pr-5">
          <h3 className="w-full flex items-center text-2xl font-bold">
            <span className="flex-shrink-0">About me</span>
            <span className="w-full h-[2px] ml-[15px] bg-uRed"></span>
          </h3>
          <div className="mt-7 flex">
            <Image
              className="shrink-0 rounded-full w-[80px] h-[80px] shadow-custom"
              src={profile}
              alt="profile"
              width={80}
              height={80}
            />
            <div className="flex flex-col justify-center ml-4">
              <strong className="mb-1 font-bold text-lg">Jonathan Doe</strong>
              <p className="mb-2 font-serif text-sm">Founder & Editor</p>
              <div className="flex gap-3">
                <FaTwitter color="#1DA1F2" size={15} />
                <FaFacebookF color="#175BEB" size={15} />
                <FaGlobeAsia className="text-uRed" size={15} />
              </div>
            </div>
          </div>
          <div className="mt-7 font-serif text-[#596172] text-sm leading-7">
            Hello! My name is Jonathan Doe working from Chile. I create some
            Ghost and Wordpress themes for differents markets, also, i offer
            live support via our ticket system.
          </div>
        </li>
      </ul>

      <div className="w-full my-12 flex flex-col justify-center items-center">
        <h1 className="mb-5 text-6xl	text-[#4B4870] font-bold first-letter:text-uRed">
          Maktub
        </h1>
        <p className="text-[#596172] font-serif text-sm">
          Published with <span className="font-bold">WordPress</span> &{" "}
          <span className="font-bold">EstudioPatagon</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
