import React from "react";

export const Category = () => {
  return (
    <div className="flex flex-row justify-end bg-red-300 h-full">
      <ul className="mr-10">
        <li>
          <button>Create Space</button>
        </li>
        <li>Music</li>
        <li>Movie</li>
        <li>Technology</li>
        <li>Celebrity</li>
      </ul>
    </div>
  );
};
