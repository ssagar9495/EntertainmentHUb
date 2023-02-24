import React, { useEffect, useState } from "react";
import { listApi } from "../../api/clientApi";
import { API } from "../../api/endPoints";
import { Grid } from "@mui/material";
import CustomCard from "../../components/customCard";
import PageHeading from "../../components/pageHeading";
import { PAGE_HEADINGS } from "../../constant/constant";
import CustomModal from "../../components/CustomModal";
import CustomPagination from "../../components/customPagination";

const TvSeries = () => {
  const [dataList, setDataList] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState();
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);

  //// GETTING TRENDING LIST FROM API////

  useEffect(() => {
    listApi(`${API.LIST_TV_SERIES}&page=${page}`).then((res) => {
      setPages(res?.data?.total_pages);
      setDataList(res?.data?.results);
    });
  }, [page]);

  ///// PAGINATION HANDLER////////

  const handleChange = (e, value) => {
    setPage(value);
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
                onCardClick={(event) => onCardClick(event, data)}
                poster={data?.poster_path}
                title={data?.original_name}
                date={data?.first_air_date}
                type={"Tv"}
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

export default TvSeries;
