import React, { useEffect, useState } from "react";
import { listApi } from "../../api/clientApi";
import { API } from "../../api/endPoints";
import { Grid } from "@mui/material";
import CustomCard from "../../components/customCard";
import PageHeading from "../../components/pageHeading";
import { PAGE_HEADINGS } from "../../constant/constant";

const TvSeries = () => {
  const [dataList, setDataList] = useState();

  //// GETTING TRENDING LIST FROM API////

  useEffect(() => {
    listApi(API.LIST_TV_SERIES).then((res) => setDataList(res?.data?.results));
  }, []);

  ///// RETURN///////

  console.log("dataList==>", dataList);

  return (
    <>
      <PageHeading title={PAGE_HEADINGS?.HEADING_TV_SERIES} />
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
              <CustomCard
                poster={data?.poster_path}
                title={data?.original_name}
                date={data?.first_air_date}
                type={data?.media_type}
                rating={data?.vote_average}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TvSeries;
