import React from "react";
import FooterNavBar from "./components/footerNavBar";
import Header from "./components/header";
import Routing from "./routes";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#05445E",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Routing />
      <FooterNavBar />
    </div>
  );
};

export default App;
