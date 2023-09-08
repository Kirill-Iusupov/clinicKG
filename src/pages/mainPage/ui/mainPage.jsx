import React from "react";
import Navbar from "../../../widgets/navbar";
import Logo from "../../../features/index";
import BodyImage from "../../../widgets/body";
import BodyNavbar from "../../../widgets/BodyNavbar";

const MainPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Navbar />
        <Logo />
      </div>
      <BodyImage />
      <BodyNavbar />
    </div>
  );
};

export default MainPage;