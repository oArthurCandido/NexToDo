"use client";
import React from "react";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { RiEditLine } from "react-icons/ri";
import useSWR, { mutate } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function TodoList() {
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3", "todo4"]);
  const { data, error } = useSWR("/api/todo", fetcher);

  const category = {
    work: "nextGreen",
    study: "nextred",
    personal: "nextBlue",
    leisure: "nextYellow",
  };

  const completedToggle = async (index, id) => {
    await fetch("api/todo", {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        completed: !data.todos[index].completed,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    mutate("/api/todo");
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todo?id=${id}`, {
      method: "DELETE",
    });
    mutate("/api/todo");
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
              } rounded-full border border-gray-500 w-4 h-4 appearance-none `}
              onChange={() => completedToggle(index, todo.id)}
            />

            <span className={`${todo.completed ? "line-through" : ""} ml-2`}>
              {todo.title}
            </span>
          </div>
          <div className="flex items-center">
            <span
              className={`mr-2 bg-${
                category[todo.category]
              } rounded-full w-3 h-3`}
            ></span>
            <div>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="hover:bg-nextred rounded-full p-2"
              >
                <BsTrash className="text-2xl hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
