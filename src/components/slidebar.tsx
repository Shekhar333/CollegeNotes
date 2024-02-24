import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

function Arrow() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex justify-center items-center h-full w-4">
      <FaCaretRight
        color="#002645"
        size={30}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {/* <Slidebar isOpen={isOpen} /> */}
    </div>
  );
}

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
      className={`flex justify-center items-center h-12 w-full bg-[#002645] shadow mr-0 hover:bg-sky-900 border-gray-50 ${
        semester === index + 1 ? "bg-[#37cdc399]" : ""
      }`}
      style={{ borderRadius: "0" }}
      onClick={() => {
        setSemester(semester === index + 1 ? -1 : index + 1);
      }}
    >
      {item}
    </button>
  ));

  return (
    <ul className="flex flex-col text-center h-full w-48 bg-[#92e7e199] text-color-white shadow">
      {listItems}
    </ul>
  );
}

function Slidebar({ isOpen }: { isOpen: boolean }) {
  const styleForSlidebar = isOpen ? "flex h-full w-52" : "hidden";

  return (
    <div>
      <MyComponent />
      <Arrow />
    </div>
  );
}

export default Slidebar;
