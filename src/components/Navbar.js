import React from "react";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <div>
      <nav className="pt-1 grid grid-cols-3 justify-center items-center border border-hamro-grey">
        <div>
          <img className="h-14 w-14" src={logo} alt="" srcset="" />
        </div>
        <div className="">
          <ul className="flex">
            <li className="ml-16 pt-2 pb-2">Home</li>
            <li className="ml-16 pt-2 pb-2">Blog</li>
            <li className="ml-16">
              <input
                className="h-9 p-5 w-72 text-black border border-black"
                type="text"
                placeholder="Search blogs here"
              />
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <div className="mr-4">
            <button className="bg-red-500 text-white pl-8 pr-8 pt-1 pb-1">
              Login
            </button>
          </div>
          <div>
            <button className="bg-red-500 text-white pl-8 pr-8 pt-1 pb-1 mr-3">
              Signup
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
