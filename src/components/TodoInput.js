import React from "react";
import { FiSend } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";

function TodoInput() {
  return (
    <div className="flex mt-2">
      <input
        className="w-full rounded-md dark:bg-black border border-gray-500 dark:text-gray-200"
        type="text"
        placeholder="O que você vai fazer hoje?"
      />
      <button className="hover:bg-nextGreen rounded-full ml-1 p-2">
        <RiAddFill className="text-2xl" />
      </button>
    </div>
  );
}

export default TodoInput;
