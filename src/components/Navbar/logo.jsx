import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <img onError="this.onerror=null;" alt="Timescale logo" />
      {/* <h4>Timescale</h4> */}
    </div>
  );
};

export default Logo;
