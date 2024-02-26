import logo from "../assets/logo.png";
import { useFood } from "../context/food/useFood";

function Navbar() {
  const foodData = useFood();
  console.log(foodData);
  return (
    <nav className="absolute top-0 flex items-center justify-between py-3.5 w-full shadow  backdrop-blur-xl">
      <img src={logo} className=" w-10 mx-4 " />
      <div className="flex [&>a]:text-black gap-10 px-12">
        <button onClick={() => foodData.setName("Mango")}>Mango</button>
        <a href="/home">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
        <a href="/Authenticatoin">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
