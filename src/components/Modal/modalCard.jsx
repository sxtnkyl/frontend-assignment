import React from "react";
import { movieProps } from "../../util/proptypes";
import "./modalCard.css";
import moment from "moment";

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

  let dateObj = new Date(release_date);
  let momentObj = moment(dateObj);
  const formatDate = momentObj.format("MMMM Do YYYY");

  return (
    <div className="modal-card" onClick={closeModal}>
      <div className="header">
        <h3>{title}</h3>
        <div className="close">X</div>
      </div>

      <div className="modal-card-content">
        <img className="modal-card-img" src={srcPath} alt="movie poster" />
        <div className="movie-info">
          <span>
            Release Date: <span style={{ fontWeight: 500 }}>{formatDate}</span>
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
