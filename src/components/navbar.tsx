// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../auth/useAuth";
function Navbar() {
  const { user, signIn, signOut } = useAuth();

  console.log(user);
  const handleClick = () => {
    if (!user) {
      signIn("dsaf", "dasfasd");
      return;
    }
    signOut();
  };

  return (
    <nav className="absolute top-0 flex items-center justify-between py-3.5 w-full shadow  backdrop-blur-xl">
      <img src={logo} className=" w-10 mx-4 " />
      <div className="flex [&>a]:text-black gap-10 px-12">
        <Link to="/home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Authenticatoin">Login</Link>
        {/* <button onClick={handleClick}>{!user ? "Login" : "Log out"}</button> */}
      </div>
    </nav>
  );
}

export default Navbar;
