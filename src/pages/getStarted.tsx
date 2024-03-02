import React from "react";
import Navbar from "../components/navbar";
import backgroundimage from "../assets/background.png";
import { useAuth } from "../auth/useAuth";
import stripImage from "../assets/image5.png";

const GetStarted = () => {
  const { user } = useAuth();
  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-center w-screen h-screen text-black bg-cover gap-10"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <img
          src={stripImage}
          className="absolute mix-blend-lighten w-full h-64 z-0"
        />
        <div className="flex  gap-2 justify-center items-center flex-col z-10">
          <div className="flex gap-5   justify-center items-center">
            <div className="flex gap-1 justify-center items-center text-4xl font-semibold">
              Elevate
            </div>
            <div className="flex gap-1 justify-center items-center text-7xl font-bold text-[#405681]">
              LEARNING
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div className="flex gap-1 justify-center items-center text-4xl font-semibold bot">
              Organised
            </div>
            <div className="flex gap-1 justify-center items-center text-7xl font-bold text-[#405681]">
              {" "}
              NOTES{" "}
            </div>
          </div>
        </div>
        {/* <div className=""> */}
        <button className="bg-[#405681] hover:bg-[#405682] text-white font-semibold hover:text-white py-2 px-4 border border-black  rounded z-10">
          Get Stated
        </button>
        {/* </div> */}
      </div>
    </>
  );
};

export default GetStarted;
