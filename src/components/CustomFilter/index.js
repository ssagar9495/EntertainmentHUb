import React from "react";
import { Chip, Typography } from "@mui/material";

const CustomFilter = ({ filterArray, onChange, filterValue }) => {
  return (
    <Typography
      variant="h6"
      component="h6"
      color="white"
      fontWeight="400"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingBottom="10px"
      fontSize="12px"
    >
      <Typography marginRight="10px">Filter By:</Typography>
      {filterArray.map((value, index, arr) => {
        return (
          <Chip
            label={value?.label}
            onClick={(e) => onChange(value?.value)}
            variant={filterValue === value?.value ? "outlined" : "filled"}
          />
        );
      })}
    </Typography>
  );
};

export default CustomFilter;
