import React from "react";
import { useState, useEffect } from "react";

import NavBar from "../Navbar/index";
import DisplayBody from "../DisplayBody/displayBody";

import { fetchLatestMovies } from "../../api/movieApi";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //initial load of latest movies
  useEffect(() => {
    setLoading(true);
    fetchLatestMovies().then((res) => {
      setLoading(false);
      if (res.status !== 200) {
        //TODO: add conditional retry
        setError(`Error of status: ${res.status}`);
      } else {
        setMovies(res.data.results);
      }
    });
  }, []);

  return (
    <div className="AppContainer">
      <NavBar />
      <DisplayBody movies={movies} />
      {/* <Modal /> */}
    </div>
  );
};

export default App;
