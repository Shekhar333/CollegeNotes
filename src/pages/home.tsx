import backgroundimage from "../assets/background.png";
import Navbar from "../components/navbar";
import Slidebar from "../components/slidebar";

export default function Home() {
  return (
    <>
      <div
        className="bg-center w-screen h-screen pt-20"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <Navbar />
        <Slidebar isOpen={false} />
      </div>
    </>
  );
}

// " style="background-image: url(...)"
