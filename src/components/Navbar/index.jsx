import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import "./index.css";

const Navbar = (props) => {
  return (
    <div className="nav-container">
      <Logo />
      <SearchBar
        onSearchBarChange={props.onSearchBarChange}
        fetchLatest={props.fetchLatest}
      />
    </div>
  );
};

export default Navbar;
