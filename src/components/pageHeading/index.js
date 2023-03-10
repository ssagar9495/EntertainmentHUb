import React from "react";
import { Typography } from "@mui/material";

const PageHeading = ({ title }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      color="white"
      fontWeight="300"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingBottom="10px"
      textAlign="center"
    >
      {title}
    </Typography>
  );
};

export default PageHeading;
