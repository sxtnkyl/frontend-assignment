import React from "react";
import { movieProps } from "../../util/proptypes";
import "./modalCard.css";

const ModalCard = ({
  closeModal,
  title,
  poster_path,
  release_date,
  overview,
  vote_average,
  vote_count,
}) => {
  const srcPath = process.env.REACT_APP_API_BASE_IMAGE_URL + "/" + poster_path;

  return (
    <div className="modal-card" onClick={closeModal}>
      <div className="header">
        <h3>{title}</h3>
        <div className="close">X</div>
      </div>

      <div className="modal-card-content">
        <img className="modal-card-img" src={srcPath} />
        <div className="movie-info">
          <span>
            Release Date:{" "}
            <span style={{ fontWeight: 500 }}>{release_date}</span>
          </span>
          <span>{overview}</span>
          <span>
            <span style={{ fontWeight: "bolder" }}>{vote_average}</span> / 10 (
            {vote_count} total votes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;

ModalCard.prototypes = {
  movies: movieProps,
};
