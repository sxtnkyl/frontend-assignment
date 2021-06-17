import React from "react";

//onClick updates global context with key(index in movies)
const MovieCard = ({
  handleModalOpen,
  index,
  title,
  poster_path,
  vote_average,
}) => {
  return (
    <div onClick={() => handleModalOpen(index)}>
      {index}
      {title}
      {poster_path}
      {vote_average}
    </div>
  );
};

export default MovieCard;
