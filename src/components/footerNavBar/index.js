import React from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SearchIcon from "@mui/icons-material/Search";

const FooterNavBar = () => {
  return (
    <div style={{ minHeight: "70px" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
          <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} />
          <BottomNavigationAction
            label="TV Series"
            icon={<PersonalVideoIcon />}
          />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
export default FooterNavBar;
