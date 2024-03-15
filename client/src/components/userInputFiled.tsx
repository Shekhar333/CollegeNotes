import React, { useState } from "react";
import stripImage from "../assets/strip.png";

export default function UserInputFiled() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="flex  justify-center items-center w-screen h-3/4 ">
        <div>
          {isLogin ? (
            <form className="flex flex-col gap-6 resize items-center justify-center bg-center relative text-black px-10 z-10 ">
              <img
                src={stripImage}
                className="absolute mix-blend-lighten w-full h-64 z-10 rounded-xl"
              />
              <div className="flex flex-col z-10 gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  size={40}
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-[#F7F7F7] rounded-md border-2"
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  size={40}
                  value={Password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="bg-[#F7F7F7] rounded-md border-2"
                  required
                />
              </div>
              <div className="z-10 bg-black text-[#FFFFFF] rounded-md px-4">
                <button type="submit">Login</button>
              </div>
            </form>
          ) : (
            <form className="flex flex-col gap-4 items-center justify-center bg-center relative text-black px-10 py-10 z-10">
              <div className="absolute w-full h-full z-0 mix-blend-lighten">
                <img
                  src={stripImage}
                  className="w-full h-full object-cover "
                  alt="Background Image"
                />
              </div>
              <div className="relative flex flex-col gap-2 z-10">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  size={40}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="bg-[#F7F7F7] rounded-md border-2"
                  required
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={Email}
                  size={40}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-[#F7F7F7] rounded-md border-2"
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={Password}
                  size={40}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="bg-[#F7F7F7] rounded-md border-2"
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>

                <input
                  type="Password"
                  id="confirmPassword"
                  value={confirmPassword}
                  size={40}
                  onChange={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                  className="bg-[#F7F7F7] rounded-md border-2"
                  required
                />
              </div>
              <div className="z-10 bg-black text-[#FFFFFF] rounded-md px-4">
                <button type="submit">Sign up</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
