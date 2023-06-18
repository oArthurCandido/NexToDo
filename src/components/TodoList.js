"use client";
import React from "react";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function TodoList() {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3", "todo4"]);
  const { data, error } = useSWR("/api/todo", fetcher);

  console.log(data?.todos, error);

  const category = {
    work: "nextGreen",
    study: "nextred",
    personal: "nextBlue",
    leisure: "nextYellow",
  };

  return (
    <>
      {data?.todos.map((todo, index) => (
        <div
          key={todo.id}
          id="todoBox"
          className="mt-2 p-2 border w-full flex items-center rounded-md border-gray-500 justify-between"
        >
          <div className="flex items-center mr-4 ">
            <input
              checked={todo.completed}
              id="green-checkbox"
              type="checkbox"
              value=""
              className={` ${
                todo.completed ? "bg-nextGreen" : ""
              } rounded-full border  w-4 h-4 appearance-none `}
              onChange={() => setChecked(!checked)}
            />

            <span className="ml-2">{todo.title}</span>
          </div>
          <div className="flex items-center">
            <span
              className={`mr-2 bg-${
                category[todo.category]
              } rounded-full w-3 h-3`}
            ></span>
            <div>
              <button className="hover:bg-nextred rounded-full p-2">
                <BsTrash className="text-2xl" />
              </button>
              <button className="hover:bg-nextBlue rounded-full p-2 ml-2">
                <RiEditLine className="text-2xl  " />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
