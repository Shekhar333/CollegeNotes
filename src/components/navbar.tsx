// import React from "react";

import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="absolute top-0 flex items-center justify-between py-3.5 w-full shadow  backdrop-blur-xl">
      <img src={logo} className=" w-10 mx-4 " />
      <div className="flex [&>a]:text-black gap-10 px-12">
        <a href="/home">Home</a>
        <a href="/home">About</a>
        <a href="/home">Contact</a>
        <a href="/home">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
