import { useState } from "react";

export default function UserInputFiled() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <form className="flex  bg-center  ">
          <div className="flex flex-col bg-center">
            <label htmlFor="email">Email:</label>
            <label htmlFor="password">Password:</label>
          </div>
          <div className="flex flex-col bg-center">
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
              type="email"
              id="email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
        </form>
      ) : (
        <form className="flex  bg-center  ">
          <div className="flex flex-col bg-center">
            <label htmlFor="name">name:</label>
            <label htmlFor="password">Password:</label>
            <label htmlFor="email">Email:</label>
            <label htmlFor="confirmPassword">confirm Password:</label>
          </div>
          <div className="flex flex-col bg-center">
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

          <button type="submit">Sign Up</button>
        </form>
      )}
    </>
  );
}
