import React from "react";
import Navbar from "../components/navbar";
import backgroundimage from "../assets/background.png";

const GetStarted = () => {
  return (
    <>
      <div
        className="bg-center w-screen h-screen pt-20 bg-cover"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        {/* <Navbar /> */}
      </div>
    </>
  );
};

export default GetStarted;
