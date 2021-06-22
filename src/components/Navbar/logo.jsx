import React from "react";
import "./logo.css";

//<img> tag without src attribute lead to broken image icon
const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo" onError="this.onerror=null;" alt="Timescale logo" />
    </div>
  );
};

export default Logo;
