import React from "react";
import Navbar from "../../../widgets/navbar";
import NavBar from "../../../features";

const MainPage = () => {
  return (
    <div className="container">
      {/* <h1>This is main page</h1> */}
      <div className="flex">
        <Navbar />
        <NavBar />
      </div>
    </div>
  );
};

export default MainPage;
