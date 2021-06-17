import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import "./index.css";

const Navbar = (props) => {
  return (
    <nav className="nav-container">
      <Logo />
      <SearchBar
        onSearchBarChange={props.onSearchBarChange}
        fetchLatest={props.fetchLatest}
      />
    </nav>
  );
};

export default Navbar;
