import React from "react";
import { Typography } from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import CameraRollIcon from "@mui/icons-material/CameraRoll";

const Header = () => {
  return (
    <div style={{ minHeight: "100px" }}>
      <Typography
        variant="h2"
        component="h2"
        color="white"
        fontWeight="400"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop="10px"
        paddingBottom="10px"
        boxShadow="0px 1px 7px black "
        position="fixed"
        zIndex="1"
        width="100%"
        bgcolor="#05445E"
      >
        <TheatersIcon fontSize="45px" />
        ENTERTAINMENT HUB
        <CameraRollIcon fontSize="45px" />
      </Typography>
    </div>
  );
};
export default Header;
