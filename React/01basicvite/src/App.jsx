import { useState } from "react";
import Youtube from "./youtube";

function App() {
  const username = "Shiv";
  return (
    <>
      <h1>vite react app{2 + 2}</h1>
      <h1>vite react app {username}</h1>
      <Youtube />
    </>
  );
}

export default App;
