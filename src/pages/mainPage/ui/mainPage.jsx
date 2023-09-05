import React from "react";
import Navbar from "../../../widgets/navbar";
import NavBar from "../../../features";
import BodyImage from "../../../widgets/body";

const MainPage = () => {
  return (
    <div className="container">
      {/* <h1>This is main page</h1> */}
      <div>
        <Navbar />
        <NavBar />
      </div>
      <BodyImage />
    </div>
  );
};

export default MainPage;
