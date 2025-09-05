import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let srt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charAllowed) srt += "!@#$%^&*()_+";
    if (numberAllowed) srt += "0123456789";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * srt.length + 1);
      pass += srt.charAt(char);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword]);

  const passwordRef = useRef(null);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-neutral-800">
      <div className="w-[90%] max-w-md bg-white shadow-2xl p-8 rounded-2xl border border-gray-100">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Password Generator
          </h1>
        </div>

        {/* Password Display */}
        <div className="flex mb-6">
          <input
            ref={passwordRef}
            className="flex-grow bg-gray-50 border border-gray-200 p-3 rounded-l-lg text-gray-800 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={password}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 font-bold hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors flex items-center"
          >
            copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between gap-3">
          {/* Length */}
          <div className="flex items-center">
            <span className="text-gray-700 font-medium mr-2">
              Length: {length}
            </span>
            <input
              type="range"
              className="w-20 accent-blue-600"
              value={length}
              min={6}
              max={20}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          {/* Options */}
          <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <span className="text-sm">Characters</span>
          </label>

          <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <span className="text-sm">Numbers</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
