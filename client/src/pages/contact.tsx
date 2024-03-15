import React from "react";
import backgroundimage from "../assets/background.png";

import Navbar from "../components/navbar";

export default function Contact() {
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
}
