import backgroundimage from "../assets/background.png";
import Navbar from "../components/navbar";
import UserInputFiled from "../components/userInputFiled";
import Slidebar from "../components/slidebar";

export default function Authenticatoin() {
  return (
    <>
      <div
        className="bg-center w-screen h-screen pt-20 bg-cover"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        {/* <Navbar /> */}
        <UserInputFiled />
      </div>
    </>
  );
}

// " style="background-image: url(...)"
