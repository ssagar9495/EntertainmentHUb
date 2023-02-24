import React from "react";
import { Movies, Search, TvSeries, Trending } from "../pages";
import { ROUTES } from "./router";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route exact path={ROUTES.MAIN_PAGE} element={<Trending />} />
      <Route exact path={ROUTES.TRENDING} element={<Trending />} />
      <Route exact path={ROUTES.MOVIES} element={<Movies />} />
      <Route exact path={ROUTES.SEARCH} element={<Search />} />
      <Route exact path={ROUTES.TV_SERIES} element={<TvSeries />} />
    </Routes>
  );
};

export default Routing;
