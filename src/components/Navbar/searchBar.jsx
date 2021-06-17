import React from "react";
import { useState } from "react";

//searchBar controlled component > value
//prop handles fetch
const SearchBar = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    //if typed, then back to empty- load newest
    if (e.target.value == "") {
      props.fetchLatest();
    }
    setValue(e.target.value);
    //debouncer: dont send on every keypress- people type fast
    setTimeout(() => {
      props.onSearchBarChange(value);
    }, 500);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search for a movie"
        onChange={handleChange}
        value={value}
        onSubmit={handleChange}
      />
    </form>
  );
};

export default SearchBar;
