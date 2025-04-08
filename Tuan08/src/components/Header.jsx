import React from "react";
import Bell from "../assets/Bell 1.png";
import Question from "../assets/Question 1.png";
import avatar from "../assets/Avatar (1).png";
import search from "../assets/Search.png";
export default function Header() {
  return (
    <div className="grid grid-flow-col py-2 content-between border-b border-gray-300 px-4 r">
      <h2 className="text-[rgb(245,76,135)] font-bold text-3xl">Dashboard</h2>
      <div className="flex gap-5 justify-end items-center">
        <div className="relative flex items-center" style={{width: "45%"}}>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded pl-8 py-1 border-0 bg-[rgb(242,243,245)] focus:outline-1 focus: outline-[blue]"
            style={{width: "100%"}}
          />
          <img src={search} className="absolute left-3" />
        </div>
        <img src={Bell} style={{ width: "10x", height: "25px" }} />
        <img src={Question} style={{ width: "10x", height: "25px" }} />
        <img src={avatar} />
      </div>
    </div>
  );
}
