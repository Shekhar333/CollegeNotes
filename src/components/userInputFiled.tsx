import React, { useState } from "react";
import stripImage from "../assets/strip.png";

export default function UserInputFiled() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-3/4">
        {isLogin ? (
          <form className="flex items-center justify-center bg-center relative text-black p-10 z-10">
            <div className="absolute w-full h-full mix-blend-lighten z-0">
              <img
                src={stripImage}
                className="absolute w-full h-full object-cover mix-blend-lighten"
              />
            </div>
            <div className="flex flex-col z-10">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            {/* <div className="flex flex-col">
              
            </div> */}
          </form>
        ) : (
          <form className="flex items-center justify-center bg-center relative text-black p-5 z-10">
            <div className="absolute w-full h-full z-0 mix-blend-lighten">
              <img
                src={stripImage}
                className="w-full h-full object-cover "
                alt="Background Image"
              />
            </div>
            <div className="relative flex flex-col gap-2 z-10">
              <label htmlFor="name">name:</label>
              <label htmlFor="email">Email:</label>
              <label htmlFor="password">Password:</label>
              <label htmlFor="confirmPassword">confirm Password:</label>
            </div>
            <div className="relative flex flex-col gap-2 z-10">
              <input
                type="email"
                id="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <input
                type="password"
                id="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <input
                type="Password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <button type="submit">Sign Up</button>
            </div>
          </form>
        )}
        {/* <button>Signup</button> */}
      </div>
    </>
  );
}
