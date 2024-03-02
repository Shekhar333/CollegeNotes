import backgroundimage from "../assets/background.png";
import UserInputFiled from "../components/userInputFiled";
import { useAuth } from "../auth/useAuth";

export default function Authenticatoin() {
  const { user, signIn, signOut } = useAuth();

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
