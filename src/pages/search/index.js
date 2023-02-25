import React, { useEffect, useState } from "react";
import { PAGE_HEADINGS } from "../../constant/constant";
import PageHeading from "../../components/pageHeading";
import { Grid } from "@mui/material";
import { apiKey } from "../../api/clientApi";
import { listApi } from "../../api/clientApi";
import CustomPagination from "../../components/customPagination";
import { API } from "../../api/endPoints";
import SearchInput from "./searchInput";
import CustomCard from "../../components/customCard";
import CustomModal from "../../components/CustomModal";
import TabBox from "./tabBox";
import DataAlert from "./dataAlert";

const Search = () => {
  const [value, setValue] = useState(0);
  const [tabType, setTabType] = useState("movie");
  const [searchText, setSearchText] = useState("");
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const [dataList, setDataList] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState();

  /// GETTING SEARCH DATA FROM API//////

  useEffect(() => {
    listApi(
      `${API.SEARCH}${tabType}${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    ).then((res) => {
      setPages(res?.data?.total_pages);
      setDataList(res?.data?.results);
    });
  }, [tabType, searchText, page, value]);

  /////// HANDLER FOR TAB CHANGE//////

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      setTabType("movie");
    }
    if (newValue === 1) {
      setTabType("tv");
    }
    setValue(newValue);
  };

  /////// HANDLER FOR SEACRH CHANGE//////

  const searchHandler = (event) => {
    setSearchText(event?.target?.value);
  };

  ///// PAGINATION HANDLER////////

  const handleChangePagination = (e, value) => {
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

  ////// RETURN ////////

  return (
    <>
      <PageHeading title={PAGE_HEADINGS?.HEADING_SEARCH} />
      <SearchInput searchHandler={searchHandler} />
      <TabBox handleChange={handleChange} value={value} />
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
                title={data?.original_title || data?.original_name}
                date={data?.first_air_date || data?.release_date}
                type={tabType}
                rating={data?.vote_average}
              />
            </Grid>
          );
        })}
      </Grid>

      {!!dataList?.length && (
        <CustomPagination
          pages={pages}
          page={page}
          handleChange={handleChangePagination}
        />
      )}
      {!dataList?.length && <DataAlert />}
      <CustomModal
        tabType={tabType}
        openModal={openModal}
        closeModalHandler={closeModalHandler}
        selectedCardData={selectedCardData}
      />
    </>
  );
};

export default Search;
