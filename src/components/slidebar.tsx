import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

function MyComponent() {
  const [semester, setSemester] = useState(-1);
  const items = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
  ];

  const listItems = items.map((item, index) => (
    <button
      key={item}
      className={`flex justify-center items-center h-12 w-full bg-[#002645] shadow mr-0 ${
        index + 1 === semester ? "" : "hover:bg-sky-900"
      } border-gray-50 ${semester === index + 1 ? "bg-[#37cdc399]" : ""}`}
      style={{ borderRadius: "0" }}
      onClick={() => {
        setSemester(semester === index + 1 ? -1 : index + 1);
      }}
    >
      {item}
    </button>
  ));

  return (
    <ul className="flex flex-col text-center h-full w-48 bg-[#92e7e199] text-white shadow">
      {listItems}
    </ul>
  );
}

interface ArrowProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function Arrow({ isOpen, setIsOpen }: ArrowProps) {
  return (
    <div
      className={`flex justify-center items-center h-full w-4 ${
        isOpen ? "" : "bg-[#acc8d7]"
      }`}
    >
      <FaCaretRight
        color="#002645"
        size={30}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}

function Slidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-full">
      <div
        className={
          isOpen
            ? "flex h-full w-52 justify-center items-center transition-all"
            : "hidden"
        }
      >
        <MyComponent />
        <Arrow isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={
          !isOpen ? "flex h-full w-4 justify-center items-center" : "hidden"
        }
      >
        <Arrow isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default Slidebar;
