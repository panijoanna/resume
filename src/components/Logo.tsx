import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box className="flex items-center gap-x-2">
      <Box className="flex justify-center items-center bg-[#9cc1b4] w-10 h-10 rounded-lg">
        <Typography className="text-white text-lg ml-2" fontWeight={700}>R</Typography>
      </Box>
      <Typography className="text-white text-lg ml-2" fontWeight={700}>
        ResuME
      </Typography>
    </Box>
  );
};

export default Logo;
