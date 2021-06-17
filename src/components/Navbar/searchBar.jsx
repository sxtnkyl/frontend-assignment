import React from "react";
import { useState, useEffect } from "react";
import "./searchBar.css";

//searchBar controlled component > value
//prop handles fetch

const SearchBar = (props) => {
  const { onSearchBarChange, fetchLatest } = props;
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "") {
      fetchLatest();
    } else {
      onSearchBarChange(value);
    }
  }, [value]);

  return (
    <form>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onSubmit={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
