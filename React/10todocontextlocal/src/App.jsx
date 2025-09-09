import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-gradient-to-br from-[#1a1f36] to-[#101522] min-h-screen py-12 px-4">
        <div className="w-full max-w-2xl mx-auto shadow-lg shadow-green-500/20 rounded-2xl px-6 py-6 bg-white/10 backdrop-blur-md border border-white/20">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text tracking-wide">
            ✨ Manage Your Todos
          </h1>

          {/* Todo Form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Todo Items */}
          <div className="space-y-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="w-full transition-transform duration-300 hover:scale-[1.01]"
                >
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                <p className="text-4xl mb-2">📝</p>
                <p className="italic">No todos yet... Add your first task 🚀</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
