import backgroundimage from "../assets/background.png";
import Slidebar from "../components/slidebar";

export default function Home() {
  return (
    <>
      <div
        className="bg-center w-screen h-screen pt-20 bg-cover"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        {/* <Navbar /> */}
        <Slidebar />
      </div>
    </>
  );
}

// " style="background-image: url(...)"
