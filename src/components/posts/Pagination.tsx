import React, { useState } from "react";

interface Props {
  totalPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ totalPage, page, setPage }: Props) => {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const prevClick = () => {
    setPage((prev) => (prev === 1 ? 1 : prev - 1));
    scrollTop();
  };
  const nextClick = () => {
    setPage((prev) => (prev === totalPage ? totalPage : prev + 1));
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-[30px]">
      {page !== 1 && (
        <button
          className="px-[15px] py-[5px] bg-uRed text-[12px] text-white shadow-custom"
          onClick={prevClick}
        >
          Prev
        </button>
      )}
      <span className="font-serif text-sm mx-[30px] text-[#596172]">
        Page {page} of {totalPage}
      </span>
      {page !== totalPage && (
        <button
          className="px-[15px] py-[5px] bg-uRed text-[12px] text-white shadow-custom"
          onClick={nextClick}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
