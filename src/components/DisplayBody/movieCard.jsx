import React from "react";

const MovieCard = ({ title, poster_path, vote_average }) => {
  return (
    <div>
      {title}
      {poster_path}
      {vote_average}
    </div>
  );
};

export default MovieCard;
