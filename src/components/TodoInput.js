"use client";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import { useState } from "react";
import { mutate } from "swr";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("leisure");
  const [seted, setSeted] = useState({
    work: false,
    study: false,
    personal: false,
    leisure: true,
  });

  const createTodo = async () => {
    if (!todo) {
      alert("Digite algo!");
      return;
    }
    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
        category: category,
      }),
    });
    setTodo("");
    mutate("/api/todo");
  };
  const handleEnter = (e) => {
    if (e.code == "Enter") {
      createTodo();
    }
  };

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
          className="w-full rounded-md dark:bg-black border border-gray-500 dark:text-gray-200 p-2"
          type="text"
          placeholder="O que você vai fazer hoje?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />
        <button className="hover:bg-nextGreen rounded-full ml-1 p-3">
          <RiAddFill
            onClick={createTodo}
            className="text-2xl hover:text-white"
          />
        </button>
      </div>
      <div className="flex justify-between mt-2 ">
        <div className="flex items-center">
          <input
            id="work"
            type="radio"
            className={`${
              seted.work ? "border-2 " : ""
            } appearance-none w-5 h-5 bg-nextGreen rounded-full mr-2 border-gray-500 dark:border-gray-200`}
            onChange={(e) => handleSeted(e)}
            name="category"
          />
          <span>Trabalho</span>
        </div>
        <div className="flex items-center">
          <input
            id="study"
            className={`${
              seted.study ? "border-2 " : ""
            } appearance-none w-5 h-5 bg-nextred  rounded-full mr-2 border-gray-500 dark:border-gray-200`}
            type="radio"
            name="category"
            onChange={(e) => handleSeted(e)}
          />
          <span>Estudo</span>
        </div>
        <div className="flex items-center">
          <input
            id="personal"
            className={`${
              seted.personal ? "border-2 " : ""
            } appearance-none w-5 h-5 bg-nextBlue rounded-full mr-2 border-gray-500 dark:border-gray-200`}
            type="radio"
            name="category"
            onChange={(e) => handleSeted(e)}
          />
          <span>Pessoal</span>
        </div>
        <div className="flex items-center">
          <input
            id="leisure"
            className={`${
              seted.leisure ? "border-2" : ""
            } appearance-none w-5 h-5 bg-nextYellow rounded-full mr-2 border-gray-500 dark:border-gray-200`}
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
