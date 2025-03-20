"use client";
import { Box, Typography, ListItem, List } from "@mui/material";
import CardFormModal from "./CardFormModal";

const JobBoard = () => {
  const selectedOption = [
    " All applications",
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
  ];
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
            <List
              key={index}
              className="flex gap-5 text-[#6c6c7f] list-none"
            >
              <ListItem className="cursor-pointer !pl-0 transition duration-300 ease-in-out font-light hover:text-[#247aff]">
                {option}
              </ListItem>
            </List>
          ))}
          <Box className="flex items-center ml-auto">
            <CardFormModal />
          </Box>
        </Box>
      </Box>
      <Box className="h-4/5"></Box>
    </Box>
  );
};

export default JobBoard;
