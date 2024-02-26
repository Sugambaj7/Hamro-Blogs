import React from "react";
import { Category } from "../components/Category";
import { Content } from "../components/Content";

export const Home = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <Category />
      </div>
      <div>
        <Content />
      </div>
      <div></div>
    </div>
  );
};
