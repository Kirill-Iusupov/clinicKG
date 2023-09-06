import React from "react";
import Navbar from "../../../widgets/navbar";
import NavBar from "../../../features";
import BodyImage from "../../../widgets/body";
import BodyNavbar from "../../../widgets/BodyNavbar";

const MainPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Navbar />
        <NavBar />
      </div>
      <BodyImage />
      <BodyNavbar />
    </div>
  );
};

export default MainPage;