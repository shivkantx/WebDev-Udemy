import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    children: "Click me to visit Google",
  },
};

function myApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https:google.com" target="_blank">
    visit Google
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https:google.com", target: "_blank" },
  "click to visit googlle"
);
createRoot(document.getElementById("root")).render(<App />);
