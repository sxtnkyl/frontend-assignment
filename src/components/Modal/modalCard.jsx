import React from "react";
import { movieProps } from "../../util/proptypes";

const ModalCard = ({
  closeModal,
  title,
  poster_path,
  release_date,
  overview,
  vote_average,
  vote_count,
}) => {
  return (
    <div onClick={closeModal}>
      {title}
      {poster_path}
      {release_date}
      {overview}
      {vote_average}
      {vote_count}
    </div>
  );
};

export default ModalCard;

ModalCard.prototypes = {
  movies: movieProps,
};
