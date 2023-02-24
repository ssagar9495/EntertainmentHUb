import React, { useEffect, useState } from "react";
import Dashboard from "./pages/dashboard";
import FooterNavBar from "./components/footerNavBar";
import Header from "./components/header";
import { API } from "./api/endPoints";
import { listApi } from "./api/clientApi";

const App = () => {
  const [dataList, setDataList] = useState();

  useEffect(() => {
    listApi(API.LIST_TRENDING).then((res) => setDataList(res?.data?.results));
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#05445E",
        minHeight: "100vh",
        // paddingBottom: "100px",
      }}
    >
      <Header />
      <Dashboard dataList={dataList} />
      <FooterNavBar />
    </div>
  );
};

export default App;
