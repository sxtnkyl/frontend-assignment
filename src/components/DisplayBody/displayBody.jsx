import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";

import PropTypes from "prop-types";
//props = array of movies to display
//single movie json (typescript save us.)
PropTypes.arrayOf({
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.any),
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
});

const DisplayBody = ({ movies }) => {
  return (
    <div>
      <h2>Most Recent Movies</h2>
      {movies.map((movie, i) => {
        return <MovieCard key={i} {...movie} />;
      })}
    </div>
  );
};

export default DisplayBody;
