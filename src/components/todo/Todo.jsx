import React from "react";
import { useState } from "react";
import { todoAdded } from "../../redux/actions/todoAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Todo() {
  const [value, setValue] = useState("");

  const incomingTodoData = useSelector((state) => state.toDo);
  const dispatch = useDispatch();
  function addingItems() {
    dispatch(todoAdded(value));
    setValue("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Todo"
        className="outline-none border-2 border-black border-solid rounded-lg pl-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="border-2 border-black border-solid rounded-lg ml-5 px-1 "
        onClick={addingItems}
      >
        ADD
      </button>
      {incomingTodoData && incomingTodoData.map((el, i) => <p key={i}>{el}</p>)}
    </div>
  );
}
