import React from "react";
import ToastMessage from "../toastMessage";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Grid, Box, Paper } from "@mui/material";
import { Transition } from "./styles";
import { styled } from "@mui/material/styles";
import { img_200 } from "../../config/config";
import { listApi } from "../../api/clientApi";
import { API } from "../../api/endPoints";
import { apiKey } from "../../api/clientApi";
import TopBar from "./topBar";
import Heading from "./heading";
import Overview from "./overview";
import YouTubeButton from "./youtubeButton";
import { viewHandler } from "../../utils";

////  ITEM COMPONET FROM MIDDLE BOX///////

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomModal = ({
  openModal,
  closeModalHandler,
  selectedCardData,
  movieType,
  tabType,
}) => {
  ////TOAST SETTING

  /////HANDLER FOR GETTING YOUTUBE LINK//////

  const youTubeHandler = () => {
    console.log("selectedCardData==>", selectedCardData);
    listApi(
      `${API.YOUTUBE_ID}${
        tabType
          ? tabType
          : selectedCardData?.media_type
          ? selectedCardData?.media_type
          : movieType
          ? "movie"
          : "tv"
      }/${selectedCardData?.id}/videos${apiKey}&language=en-US`
    ).then((res) => {
      console.log("res==>", res);
      res?.data?.results[0]?.key
        ? window.open(
            `https://www.youtube.com/watch?v=${res?.data?.results[0]?.key}`
          )
        : viewHandler("Not available on YouTube");
    });
  };

  //// RETURN /////

  return (
    <Dialog
      sx={{ width: "100%" }}
      open={openModal}
      onClose={closeModalHandler}
      TransitionComponent={Transition}
    >
      <ToastMessage />
      <TopBar closeModalHandler={closeModalHandler} />
      <Box sx={{ flexGrow: 1, margin: "10px 10px 10px 10px" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Grid item xs={12} sm={4} textAlign="center">
            <img
              src={`${img_200}${selectedCardData?.poster_path}`}
              alt={selectedCardData?.poster_path}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Item>
              <Heading selectedCardData={selectedCardData} />
              <Item>
                <Overview selectedCardData={selectedCardData} />
              </Item>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <YouTubeButton youTubeHandler={youTubeHandler} />
    </Dialog>
  );
};

export default CustomModal;
