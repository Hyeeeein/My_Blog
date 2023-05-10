"use client";

import React from "react";
import Image from "next/image";
import img from "/public/image/mixkit-man-holding-the-brim-of-a-yellow-fedora-that-covers-93-desktop-wallpaper-150x150.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRss,
  FaGlobeAsia,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname.includes("tag") ? null : (
        <aside className="w-[30%] shrink-0">
          <ul className="w-full">
            <li className="mb-12">
              <h3 className="w-full flex items-center text-2xl font-bold">
                <span className="flex-shrink-0">Recent posts</span>
                <span className="w-full h-[2px] ml-[15px] bg-uRed"></span>
              </h3>
              <ul className="mt-7 space-y-7">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex">
                    <Image
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

            <li className="mb-12">
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

            <li className="mb-12">
              <h3 className="w-full flex items-center text-2xl font-bold">
                <span className="flex-shrink-0">Social</span>
                <span className="w-full h-[2px] ml-[15px] bg-uRed"></span>
              </h3>
              <ul className="grid grid-cols-4 gap-2 mt-7">
                <li className="w-full">
                  <button className="w-full h-20 flex justify-center items-center bg-[#1DA1F2]">
                    <FaTwitter color="white" size={23} />
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full h-20 flex justify-center items-center bg-[#175BEB]">
                    <FaFacebookF color="white" size={23} />
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full h-20 flex justify-center items-center bg-[#F12BB2]">
                    <FaInstagram color="white" size={23} />
                  </button>
                </li>
                <li className="w-full">
                  <button className="w-full h-20 flex justify-center items-center bg-[#F26624]">
                    <FaRss color="white" size={23} />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default SideBar;
