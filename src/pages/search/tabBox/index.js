import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import TabePanel from "../tabePanel";

const TabBox = ({ handleChange, value = { value } }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Movies" />
          <Tab label="Tv Series" />
        </Tabs>
      </Box>
      <TabePanel value={value} index={0}></TabePanel>
      <TabePanel value={value} index={1}></TabePanel>
    </Box>
  );
};

export default TabBox;
