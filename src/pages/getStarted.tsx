import React from "react";
import Navbar from "../components/navbar";
import backgroundimage from "../assets/background.png";
import { useAuth } from "../auth/useAuth";

const GetStarted = () => {
  const { user } = useAuth();
  return (
    <>
      <div
        className="bg-center w-screen h-screen pt-20 text-black bg-cover"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        {/* <Navbar /> */}
        {JSON.stringify(user)}
      </div>
    </>
  );
};

export default GetStarted;
