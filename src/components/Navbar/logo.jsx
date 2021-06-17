import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" />
      {/* <img className="logo" onError="this.onerror=null;" alt="Timescale logo" /> */}
      {/* <h4>Timescale</h4> */}
    </div>
  );
};

export default Logo;
