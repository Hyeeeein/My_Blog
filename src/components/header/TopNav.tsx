import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";

const TopNav = () => {
  return (
    <motion.div
      transition={{ bounce: 0 }}
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      exit={{ y: -70 }}
      className="fixed top-0 left-0 w-full py-2 bg-white shadow-custom"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center">
        <h1 className="pt-1 text-5xl	text-[#4B4870] font-bold first-letter:text-uRed align-top">
          Maktub
        </h1>
          <Nav top={true} />
      </div>
    </motion.div>
  );
};

export default TopNav;
