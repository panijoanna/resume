"use client";
import { Divider } from "@mui/material";
import { useState } from "react";
import { JobCardData } from "./JobBoard";

type JobStatus = "applied" | "interview" | "offer" | "rejected";

const JobCard = ({
  company,
  position,
  status,
  location,
  salary,
  date,
  notes,
}: JobCardData) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const statusThemes: Record<JobStatus, { bg: string; bullet: string }> = {
    applied: { bg: "bg-slate-100", bullet: "bg-blue-400" },
    interview: { bg: "bg-yellow-100", bullet: "bg-amber-400" },
    offer: { bg: "bg-green-100", bullet: "bg-green-400" },
    rejected: { bg: "bg-red-100", bullet: "bg-red-400" },
  };

  const colors = statusThemes[status as JobStatus];

  const toggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div className="w-72 bg-white rounded-lg shadow-md">
      <div
        className={`${colors.bg} font-semibold p-3 rounded-t-lg flex items-center justify-between`}
      >
        {status[0].toUpperCase() + status.slice(1)}
        <div className={`${colors.bullet} w-4 h-4 rounded-full`}></div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-bold">{position}</h2>
          <div className="flex gap-2 flex-shrink-0">
            <button className="text-xs text-blue-500 normal-case p-0 min-w-0 cursor-pointer hover:text-blue-300 transition-colors duration-300">
              Edit
            </button>
            <button className="text-xs text-red-500 cursor-pointer  hover:text-red-300 transition-colors duration-300">
              Delete
            </button>
          </div>
        </div>
        <p className="text-sm mb-2">{company}</p>
        <p className="text-xs text-gray-500 mb-1">{location}</p>
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
                <span className="font-semibold">Date:</span> {date}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Salary:</span> {salary}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Notes:</span> {notes}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCard;
