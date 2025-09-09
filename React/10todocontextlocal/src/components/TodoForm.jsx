import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-2 bg-gradient-to-r from-purple-400/70 to-purple-600/70 rounded-xl p-2 shadow-md"
    >
      <input
        type="text"
        placeholder="✍️ Add a new task..."
        className="flex-1 rounded-lg px-3 py-2 bg-white/20 placeholder-white/70 text-white text-lg font-medium outline-none focus:ring-2 focus:ring-white/80 transition"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition"
      >
        ➕ Add
      </button>
    </form>
  );
}

export default TodoForm;
