import React from "react";

function Card({
  username = "Shiv",
  post = "not assigned",
  image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
}) {
  return (
    <div
      className="bg-white p-3 sm:p-4 md:p-6 text-black rounded-xl shadow-md
                 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto
                 flex flex-col gap-3
                 transition-transform duration-300 ease-in-out
                 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Username header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800">
          @{username}
        </h2>
        <span className="text-xs text-gray-500">• {post}</span>
      </div>

      <img
        src={image}
        alt="User post"
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg
                   transition-transform duration-300 ease-in-out
                   hover:scale-105"
      />

      <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
        Beautiful Cloudy Forest
      </h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-700">
        This stunning 4K image of a cloudy forest makes a perfect card
        background.
      </p>
      <p className="hidden md:block text-sm text-gray-600">
        As the screen size grows, more details can appear here — for example, a
        longer description or extra information that’s not needed on mobile.
      </p>
    </div>
  );
}

export default Card;
