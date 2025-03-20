"use client";
import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <Box className="flex flex-col justify-between items-center pt-10 bg-[#3b3b3b] w-[15%] h-screen shadow-[5px_0px_10px_0px_rgba(50,50,105,0.15)]">
      <Logo />
      <nav className="w-full flex justify-center mt-16 mb-auto">
        <Link
          href="/infoboard"
          className="flex items-center text-white no-underline gap-2"
        >
          <Icon icon="radix-icons:dashboard" className="text-white text-xl" />
          <Typography className="text-white">Dashboard</Typography>
        </Link>
      </nav>
    </Box>
  );
};

export default Sidebar;
