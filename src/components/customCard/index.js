import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";

const CustomCard = ({ title, poster, date, type, rating, onCardClick }) => {
  const [ratingColor, setRatingColor] = useState("default");

  useEffect(() => {
    if (rating < 6) {
      setRatingColor("error");
    } else if (rating > 7) {
      setRatingColor("info");
    } else if (rating > 8) {
      setRatingColor("lightgreen");
    } else {
      setRatingColor("success");
    }
  }, []);

  return (
    <>
      <Badge
        color={ratingColor}
        badgeContent={rating?.toFixed(1)}
        style={{ zIndex: 0, left: "117px", top: "12px" }}
      ></Badge>
      <Card
        sx={{
          maxWidth: 250,
          cursor: "pointer",
          bgcolor: "gray",
          "&:hover": {
            bgcolor: "#ffffff",
            color: "#2f2f2f",
          },
        }}
        onClick={onCardClick}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={poster ? `${img_300}${poster}` : unavailable}
        />

        <CardContent>
          <Typography variant="body2" color="black">
            {title ? title.substring(0, 20) : "No Name"}
          </Typography>
          <Typography
            variant="body2"
            color="black"
            display="flex"
            justifyContent="space-between"
            marginTop="10px"
            textTransform="capitalize"
          >
            <div>{type ? type : ""}</div>
            <div>{date ? date : ""}</div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomCard;
