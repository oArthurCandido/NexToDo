"use client";
import React from "react";
import LoginBtn from "@/components/LoginBtn";

function Nav() {
  return (
    <div id="NavBox" className="flex justify-between items-center pt-2">
      <div className="font-extrabold text-3xl">
        <span>Nex</span>
        <span className="text-nextGreen">T</span>
        <span className="text-nextred">o</span>
        <span className="text-nextBlue">D</span>
        <span className="text-nextYellow">o</span>
      </div>
      <LoginBtn />
    </div>
  );
}

export default Nav;
