"use client";
import { Divider } from "@mui/material";
import { useState } from "react";

const JobCard = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="w-72 bg-white rounded-lg shadow-md">
      <div className="bg-[#F8FFF8] font-semibold p-3 rounded-t-lg flex items-center justify-between">
        Applied (1)
        <div className="bg-[#6CD31B] w-4 h-4 rounded-full"></div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-bold">Frontend Developer</h2>
          <div className="flex gap-2 flex-shrink-0">
            <button className="text-xs text-blue-500 normal-case p-0 min-w-0 cursor-pointer hover:text-blue-300 transition-colors duration-300">
              Edit
            </button>
            <button className="text-xs text-red-500 cursor-pointer  hover:text-red-300 transition-colors duration-300">
              Delete
            </button>
          </div>
        </div>
        <p className="text-sm mb-2">Google Inc.</p>
        <p className="text-xs text-gray-500 mb-1">Warsaw</p>
        <button
          onClick={toggleCard}
          className="text-xs mt-2 pb-4 text-blue-500 underline cursor-pointer 
            hover:text-blue-400 transition-colors duration-300"
        >
          {isCardOpen ? "Hide details" : "Show details"}
        </button>
        {isCardOpen && (
          <>
            <Divider />
            <div className="pt-2 text-xs">
              <div className="mb-1">
                <span className="font-semibold">Salary:</span> Not specified
              </div>
              <div className="mb-1">
                <span className="font-semibold">Notes:</span> Job posted on
                LinkedIn. Need to update portfolio before applying.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCard;
