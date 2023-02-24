import React, { useState } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SearchIcon from "@mui/icons-material/Search";
import { ROUTES } from "../../routes/router";
import { useNavigate } from "react-router-dom";

const FooterNavBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  return (
    <div style={{ minHeight: "70px" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Trending"
            icon={<WhatshotIcon />}
            onClick={() => navigate(ROUTES.TRENDING)}
          />
          <BottomNavigationAction
            label="Movies"
            icon={<MovieCreationIcon />}
            onClick={() => navigate(ROUTES.MOVIES)}
          />
          <BottomNavigationAction
            label="TV Series"
            icon={<PersonalVideoIcon />}
            onClick={() => navigate(ROUTES.TV_SERIES)}
          />
          <BottomNavigationAction
            label="Search"
            icon={<SearchIcon />}
            onClick={() => navigate(ROUTES.SEARCH)}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
export default FooterNavBar;
