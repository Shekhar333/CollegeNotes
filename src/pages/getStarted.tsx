import backgroundimage from "../assets/background.png";
import { useFood } from "../context/food/useFood";

const GetStarted = () => {
  const { name } = useFood();
  return (
    <>
      <div
        className="bg-center w-screen h-screen pt-20 bg-cover text-black"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        {name}
        {/* <Navbar /> */}
      </div>
    </>
  );
};

export default GetStarted;
