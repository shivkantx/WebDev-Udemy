import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./components/context/UserContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white p-6">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
