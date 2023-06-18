"use client";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("leisure");
  const [seted, setSeted] = useState({
    work: false,
    study: false,
    personal: false,
    leisure: true,
  });

  const handleSeted = (e) => {
    setCategory(e.target.id);
    const newSeted = {
      work: false,
      study: false,
      personal: false,
      leisure: false,
    };
    newSeted[e.target.id] = true;
    setSeted(newSeted);
  };

  return (
    <div>
      <div className="flex mt-2">
        <input
          className="w-full rounded-md dark:bg-black border border-gray-500 dark:text-gray-200"
          type="text"
          placeholder="O que você vai fazer hoje?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="hover:bg-nextGreen rounded-full ml-1 p-2">
          <RiAddFill className="text-2xl" />
        </button>
      </div>
      <div className="flex justify-between mt-2">
        <div>
          <input
            id="work"
            type="radio"
            className={`${
              seted.work ? "border-2 " : ""
            } appearance-none w-3 h-3 bg-nextGreen rounded-full mr-2`}
            onChange={(e) => handleSeted(e)}
            name="category"
          />
          <span>Trabalho</span>
        </div>
        <div>
          <input
            id="study"
            className={`${
              seted.study ? "border-2 " : ""
            } appearance-none w-3 h-3 bg-nextred  rounded-full mr-2`}
            type="radio"
            name="category"
            onChange={(e) => handleSeted(e)}
          />
          <span>Estudo</span>
        </div>
        <div>
          <input
            id="personal"
            className={`${
              seted.personal ? "border-2 " : ""
            } appearance-none w-3 h-3 bg-nextBlue rounded-full mr-2`}
            type="radio"
            name="category"
            onChange={(e) => handleSeted(e)}
          />
          <span>Pessoal</span>
        </div>
        <div>
          <input
            id="leisure"
            className={`${
              seted.leisure ? "border-2" : ""
            } appearance-none w-3 h-3 bg-nextYellow rounded-full mr-2`}
            type="radio"
            name="category"
            onChange={(e) => handleSeted(e)}
          />
          <span>Lazer</span>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;