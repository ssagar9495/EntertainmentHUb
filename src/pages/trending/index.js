import React, { useEffect, useState } from "react";
import { listApi } from "../../api/clientApi";
import { API } from "../../api/endPoints";
import { Grid } from "@mui/material";
import CustomCard from "../../components/customCard";
import PageHeading from "../../components/pageHeading";
import { PAGE_HEADINGS } from "../../constant/constant";
import CustomFilter from "../../components/CustomFilter";
import CustomPagination from "../../components/customPagination";
import { FILTER_VALUE, FILTER_BY_TIME } from "../../constant/constant";
import { apiKey } from "../../api/clientApi";
import CustomModal from "../../components/CustomModal";

const Trending = () => {
  const [dataList, setDataList] = useState();
  const [filterValue, setFilterValue] = useState("all");
  const [timeWindow, setTimeWindow] = useState("day");
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState();

  console.log("dataList==>", dataList);

  //// GETTING TRENDING LIST FROM API////

  useEffect(() => {
    listApi(
      `${API.LIST_TRENDING}/${filterValue}/${timeWindow}${apiKey}&page=${page}`
    ).then((res) => {
      setPages(res?.data?.total_pages);
      setDataList(res?.data?.results);
    });
  }, [filterValue, timeWindow, page]);

  ///// PAGINATION HANDLER////////

  const handleChange = (e, value) => {
    setPage(value);
  };

  /////  TYPE (CATEGORY) FILTER HANDLER//////

  const filterHandler = (value) => {
    setFilterValue(value);
  };

  ///// TIME FILTER HANDLER//////

  const filterByTimeHandler = (value) => {
    setTimeWindow(value);
  };

  ////// HANDLER FOR CARD CLICK//////
  const onCardClick = (event, data) => {
    setOpenModal(true);
    setSelectedCardData(data);
  };

  ////////CLOSE MODAL HANDLER//////
  const closeModalHandler = () => {
    setOpenModal(false);
    setSelectedCardData("");
  };

  ///// RETURN///////

  return (
    <>
      <PageHeading title={PAGE_HEADINGS?.HEADING_TRENDING} />
      <Grid spacing={2} direction="row" display="flex">
        <CustomFilter
          filterArray={FILTER_VALUE}
          onChange={filterHandler}
          filterValue={filterValue}
        />
        <CustomFilter
          filterArray={FILTER_BY_TIME}
          onChange={filterByTimeHandler}
          filterValue={timeWindow}
        />
      </Grid>
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
                onCardClick={(event) => onCardClick(event, data)}
                poster={data?.poster_path}
                title={data?.original_title || data?.original_name}
                date={data?.first_air_date || data?.release_date}
                type={data?.media_type}
                rating={data?.vote_average}
              />
            </Grid>
          );
        })}
      </Grid>
      <CustomPagination pages={pages} page={page} handleChange={handleChange} />
      <CustomModal
        openModal={openModal}
        closeModalHandler={closeModalHandler}
        selectedCardData={selectedCardData}
      />
    </>
  );
};

export default Trending;
