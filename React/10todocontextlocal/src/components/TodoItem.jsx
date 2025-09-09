import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center justify-between rounded-xl px-4 py-3 shadow-md transition duration-300 
      ${
        todo.completed
          ? "bg-gradient-to-r from-green-400/70 to-green-600/70 text-white"
          : "bg-gradient-to-r from-purple-300/70 to-purple-500/70 text-white"
      }`}
    >
      {/* Left Section: Checkbox + Text */}
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          className="w-5 h-5 accent-green-600 cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`flex-1 bg-transparent text-lg font-medium outline-none ${
            isTodoEditable
              ? "border-b border-white/60 focus:border-white"
              : "border-transparent"
          } ${todo.completed ? "line-through opacity-70" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center gap-2 ml-3">
        {/* Edit / Save */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition disabled:opacity-40"
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "💾" : "✏️"}
        </button>

        {/* Delete */}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-red-500/70 transition"
          onClick={() => deleteTodo(todo.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
