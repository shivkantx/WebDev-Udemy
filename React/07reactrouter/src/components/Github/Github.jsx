import React from "react";
import { useLoaderData } from "react-router-dom";
import { Github, Users, BookOpen } from "lucide-react";

function GithubPage() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/shivkantx")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-6 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Avatar */}
        <div className="relative inline-block group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <img
            src={data.avatar_url}
            alt={data.login}
            className="relative w-40 h-40 mx-auto rounded-full border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105; group-hover:scale-110"
          />
        </div>

        {/* Name + Bio */}
        <h1 className="mt-6 text-3xl font-bold text-gray-900 transition duration-300 hover:text-orange-600">
          {data.name || data.login}
        </h1>
        <p className="text-gray-600 mt-2 italic">
          {data.bio || "No bio available."}
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition duration-300 cursor-pointer hover:scale-105">
            <Users className="w-6 h-6 text-orange-600 mb-1" />
            <span className="text-xl font-bold">{data.followers}</span>
            <span className="text-gray-500 text-sm">Followers</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition duration-300 cursor-pointer hover:scale-105">
            <Users className="w-6 h-6 text-blue-600 mb-1" />
            <span className="text-xl font-bold">{data.following}</span>
            <span className="text-gray-500 text-sm">Following</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition duration-300 cursor-pointer hover:scale-105">
            <BookOpen className="w-6 h-6 text-green-600 mb-1" />
            <span className="text-xl font-bold">{data.public_repos}</span>
            <span className="text-gray-500 text-sm">Repos</span>
          </div>
        </div>

        {/* GitHub Button */}
        <div className="mt-10">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md transform transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-5 h-5" /> View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default GithubPage;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shivkantx");
  return response.json();
};
