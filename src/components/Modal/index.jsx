import React from "react";
import Backdrop from "./backdrop";
import ModalCard from "./modalCard";

const Modal = ({ modalIndex, handleModalOpen, closeModal, movies }) => {
  let openedMovie = movies[modalIndex];

  return (
    <Backdrop>
      <ModalCard
        handleModalOpen={handleModalOpen}
        closeModal={closeModal}
        {...openedMovie}
      />
    </Backdrop>
  );
};

export default Modal;
