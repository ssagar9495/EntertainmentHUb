import React from "react";
import { Typography } from "@mui/material";

const Overview = ({ selectedCardData }) => {
  return (
    <Typography
      variant="h7"
      component="h7"
      color="#2f2f2f"
      fontWeight="500"
      display="flex"
      justifyContent="flex-start"
      width="100%"
      textAlign="start"
      paddingBottom="10px"
      fontStyle="italic"
    >
      {selectedCardData?.overview?.substring(0, 400)}
    </Typography>
  );
};
export default Overview;
