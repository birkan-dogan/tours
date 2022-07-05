import React from "react";
import gif from "./spinner.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={gif} alt="loading" />
    </div>
  );
};

export default Loading;
