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

const JobBoard = () => {
  const [jobCards, setJobCards] = useState<JobCardData[]>(getJobCards);
  const selectedOption = [
    " All applications",
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
  ];

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
    localStorage.setItem("jobCards", JSON.stringify(jobCards))
  }, [jobCards])

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
        <Box className="flex gap-2">
          {selectedOption.map((option, index) => (
            <List key={index} className="flex gap-5 text-[#6c6c7f] list-none">
              <ListItem className="cursor-pointer !pl-0 transition duration-300 ease-in-out font-light hover:text-[#247aff]">
                {option}
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
