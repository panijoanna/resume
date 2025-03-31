"use client";
import { Box, Typography, ListItem, List } from "@mui/material";
import CardFormModal from "./CardFormModal";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";

const getJobCards = (): JobCardData[] => {
  const localStorageJobCards = localStorage.getItem("jobCards");
  return localStorageJobCards ? JSON.parse(localStorageJobCards) : [];
};

export interface JobCardData {
  company: string;
  position: string;
  status: string;
  location: string;
  salary: number;
  date: string;
  notes: string;
}

export const activeTabs = [
  "All applications",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
] as const;
export type ActiveTabsTypes = (typeof activeTabs)[number];

const JobBoard = () => {
  const [jobCards, setJobCards] = useState<JobCardData[]>(getJobCards);
  const [tabs, setTabs] = useState<ActiveTabsTypes>("All applications");

  const addNewJobCards = (
    company: string,
    position: string,
    status: string,
    location: string,
    salary: number,
    date: string,
    notes: string
  ) => {
    setJobCards((prev) => [
      ...prev,
      { company, position, status, location, salary, date, notes },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("jobCards", JSON.stringify(jobCards));
  }, [jobCards]);

  return (
    <Box className="flex flex-col m-12 h-screen">
      <Box className="h-1/10 w-full">
        <Typography
          variant="h6"
          className="text-[#0e0d0d] pb-4 mb-0 border-b border-[#ececec]"
          fontWeight={700}
          fontSize={18}
        >
          My Job Board
        </Typography>
        <Box className="flex gap-4 pb-2">
          {activeTabs.map((tab) => (
            <List key={tab} className="list-none">
              <ListItem
                className={`cursor-pointer transition duration-300 ease-in-out
    ${
      tabs === tab
        ? "text-gray-800 font-medium"
        : "text-gray-500 hover:text-[#247aff]"
    }`}
                onClick={() => setTabs(tab)}
              >
                {tab}
              </ListItem>
            </List>
          ))}
          <Box className="flex items-center ml-auto">
            <CardFormModal addNewJobCards={addNewJobCards} />
          </Box>
        </Box>
      </Box>
      <Box className="h-4/5 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {jobCards.map((card, index) => (
            <JobCard
              key={index}
              company={card.company}
              position={card.position}
              status={card.status}
              location={card.location}
              salary={card.salary}
              date={card.date}
              notes={card.notes}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default JobBoard;
