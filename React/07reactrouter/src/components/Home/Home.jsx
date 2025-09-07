import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const githubUsername = "shivkantx"; // ✅ your GitHub username
  const githubAvatar = `https://github.com/${githubUsername}.png`;

  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <div className="min-h-screen my-4 bg-gradient-to-b from-white to-gray-100 px-6 flex flex-col items-center justify-center text-center">
      {/* Avatar */}
      <img
        src={githubAvatar}
        alt="GitHub Avatar"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-orange-600 mb-6 animate-fadeIn hover-tilt hover:"
      />

      {/* Intro */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 opacity-0 animate-fadeUp delay-200">
        Hi, I’m <span className="text-orange-600">Shivkant Pal</span> 👋
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl opacity-0 animate-fadeUp delay-500">
        A passionate developer who loves building clean, modern, and scalable
        web applications. Exploring technologies and contributing to open-source
        is what keeps me motivated!
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4 opacity-0 animate-fadeUp delay-700">
        <Link
          to="/about"
          className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition"
        >
          About Me
        </Link>
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 border border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition"
        >
          GitHub
        </a>
      </div>

      {/* Skills / Tech Stack */}
      <div className="mt-12 opacity-0 animate-fadeUp delay-1000">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "TailwindCSS",
            "JavaScript",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-orange-100 hover:scale-105 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Stats */}
      {githubData && (
        <div className="mt-12 mb-4 bg-white shadow-lg rounded-xl p-6 w-full max-w-md opacity-0 animate-fadeUp delay-1200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            📊 GitHub Overview
          </h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="p-4 border rounded-lg hover:shadow-md transition duration-300">
              <p className="text-2xl font-bold text-orange-600">
                {githubData.followers}
              </p>
              <p className="text-sm">Followers</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition duration-300">
              <p className="text-2xl font-bold text-orange-600">
                {githubData.public_repos}
              </p>
              <p className="text-sm">Repositories</p>
            </div>
          </div>
        </div>
      )}

      {/* Inline animation styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }

        /* Avatar hover tilt */
        .hover-tilt {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-tilt:hover {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

export default Home;
