import React from "react";
import Navbar from "../../../widgets/navbar";
import NavBar from "../../../features";
import Footer from "../../../widgets/footer";

const MainPage = () => {
  return (
    <div className="">
      {/* <h1>This is main page</h1> */}
      <div className="flex">
        <NavBar />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
