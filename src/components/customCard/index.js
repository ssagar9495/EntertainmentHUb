import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { img_300, unavailable } from "../../config/config";

const CustomCard = ({ data }) => {
  console.log("data==>", data);
  return (
    <Card sx={{ maxWidth: 250, cursor: "pointer" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={
          data?.poster_path ? `${img_300}${data?.poster_path}` : unavailable
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data?.original_title ? data?.original_title : "No Name"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          justifyContent="space-between"
          marginTop="10px"
        >
          <div>{data?.media_type}</div>
          <div>{data?.first_air_date ? data?.first_air_date : ""}</div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
