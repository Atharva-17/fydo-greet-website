"use client";

import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="md:py-6 py-4 border-b border-[#E4E7EC]">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full rtl:text-right"
        >
          <span className="text-[#333333] md:text-[1.25rem] text-[1rem] font-semibold text-left">
            {title}
          </span>
          {accordionOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#73818E] text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100 mt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
