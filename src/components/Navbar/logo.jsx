import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" onError="this.onerror=null;" alt="Timescale logo" />
    </div>
  );
};

export default Logo;
