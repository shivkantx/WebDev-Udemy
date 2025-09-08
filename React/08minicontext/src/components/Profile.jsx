import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="mt-8 text-center text-lg font-medium text-gray-300">
        🚪 Not logged in
      </div>
    );

  return (
    <div className="mt-8 w-full max-w-md bg-white text-gray-900 shadow-lg rounded-2xl p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        👤 Profile
      </h2>

      {/* User Info */}
      <div className="space-y-3">
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Username:</span>{" "}
          {user.username}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Password:</span>{" "}
          {user.password}
        </p>
      </div>
    </div>
  );
}

export default Profile;
