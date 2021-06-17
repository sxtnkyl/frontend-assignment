import React from "react";
import "./movieCard.css";

//onClick updates global context with key(index in movies)
const MovieCard = ({
  handleModalOpen,
  index,
  title,
  poster_path,
  vote_average,
}) => {
  const srcPath = process.env.REACT_APP_API_BASE_IMAGE_URL + "/" + poster_path;
  return (
    <div className="movie-card" onClick={() => handleModalOpen(index)}>
      <img className="movie-card-img" src={srcPath} />
      <h4 className="movie-card-footer">{title}</h4>
      <h5 className="score-icon">{vote_average}</h5>
    </div>
  );
};

export default MovieCard;
