import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    {
      name: "Yellow",
      value: "yellow",
      style: "bg-yellow-500 hover:bg-yellow-400",
    },
    { name: "Red", value: "red", style: "bg-red-600 hover:bg-red-500" },
    { name: "Green", value: "green", style: "bg-green-500 hover:bg-green-400" },
    { name: "Blue", value: "blue", style: "bg-blue-500 hover:bg-blue-400" },
    {
      name: "Purple",
      value: "purple",
      style: "bg-purple-500 hover:bg-purple-400",
    },
  ];

  return (
    <div
      className="w-full h-screen text-white duration-300 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white/90 backdrop-blur-md text-black py-3 px-4 flex flex-wrap gap-4 rounded-full shadow-lg border border-gray-200 max-w-2xl">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.value)}
              className={`${c.style} text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
