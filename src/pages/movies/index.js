import React, { useEffect, useState } from "react";
import { listApi } from "../../api/clientApi";
import { API } from "../../api/endPoints";
import { Grid } from "@mui/material";
import CustomCard from "../../components/customCard";
import PageHeading from "../../components/pageHeading";
import { PAGE_HEADINGS } from "../../constant/constant";
import CustomPagination from "../../components/customPagination";
import CustomModal from "../../components/CustomModal";

const Movies = () => {
  const [dataList, setDataList] = useState();
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const [selectedCardData, setSelectedCardData] = useState();
  const [openModal, setOpenModal] = useState(false);

  //// GETTING TRENDING LIST FROM API////

  useEffect(() => {
    listApi(`${API.LIST_MOVIES}&page=${page}`).then((res) => {
      setPages(res?.data?.total_pages);
      setDataList(res?.data?.results);
    });
  }, [page]);

  console.log("dataList==>", dataList);

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

  return (
    <>
      <PageHeading title={PAGE_HEADINGS?.HEADING_MOVIES} />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        // marginLeft="35px"
      >
        {dataList?.map((data, index, arr) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={data?.id}
              textAlign="-webkit-center"
            >
              <CustomCard
                onCardClick={(event) => onCardClick(event, data)}
                poster={data?.poster_path}
                title={data?.original_title}
                date={data?.release_date}
                type={"Movies"}
                rating={data?.vote_average}
              />
            </Grid>
          );
        })}
        <CustomPagination
          pages={pages}
          page={page}
          handleChange={handleChange}
        />
        <CustomModal
          openModal={openModal}
          closeModalHandler={closeModalHandler}
          selectedCardData={selectedCardData}
          movieType
        />
      </Grid>
    </>
  );
};

export default Movies;
