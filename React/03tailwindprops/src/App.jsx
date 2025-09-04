import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-2xl mx-auto">
      <Card username="lokesh" />
      <Card
        post="Staff"
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80
"
      />
      <Card
        username="rimjhim"
        image="https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=1920&q=80"
      />
    </div>
  );
}

export default App;
