"use client";
import React from "react";
import { signIn } from "next-auth/react";

function FloatingLogo() {
  return (
    <div
      onClick={() => signIn()}
      className=" flex-col h-screen justify-center  flex  items-center cursor-pointer"
    >
      <div className="font-extrabold text-5xl">
        <span>Nex</span>
        <span className="text-nextGreen">T</span>
        <span className="text-nextred">o</span>
        <span className="text-nextBlue">D</span>
        <span className="text-nextYellow">o</span>
      </div>
      <span>Faça login para criar sua lista!</span>
    </div>
  );
}

export default FloatingLogo;
