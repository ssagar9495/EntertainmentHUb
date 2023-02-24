import React from "react";
import CustomCard from "../../components/customCard";
import { Grid } from "@mui/material";

const Dashboard = ({ dataList }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      marginLeft="35px"
    >
      {dataList?.map((data, index, arr) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={data?.id}>
            <CustomCard data={data} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Dashboard;
