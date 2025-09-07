import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="py-5 text-center text-3xl bg-amber-600">User {userid}</div>
  );
}

export default User;
