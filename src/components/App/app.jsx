import React from "react";
import { useState, useEffect } from "react";

import NavBar from "../Navbar/index";
import DisplayBody from "../DisplayBody/index";
import Modal from "../Modal/index";

import { fetchLatestMovies, searchMovies } from "../../api/movieApi";

const App = () => {
  const [movies, setMovies] = useState([]);
  //TODO: add loading spinner
  const [loading, setLoading] = useState(false);
  //TODO: add conditional error refresh
  const [error, setError] = useState(null);
  //modal state/index to display
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const fetchLatest = () => {
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
  };

  //onSearchBar update
  const onSearchBarChange = (str) => {
    setLoading(true);
    //make sure have query str to pass
    if (str !== "") {
      searchMovies(str).then((res) => {
        setLoading(false);
        if (res.status !== 200) {
          //TODO: add conditional retry
          setError(`Error of status: ${res.status}`);
        } else {
          setMovies(res.data.results);
        }
      });
    }
  };

  //gets single movie index in movies state from MovieCard
  const handleModalOpen = (i) => {
    setOpen(true);
    setModalIndex(i);
  };

  const closeModal = () => {
    setOpen(false);
    setModalIndex(null);
  };

  //initial load of latest movies
  useEffect(() => {
    fetchLatest();
  }, []);

  return (
    <>
      <NavBar onSearchBarChange={onSearchBarChange} fetchLatest={fetchLatest} />
      <DisplayBody movies={movies} handleModalOpen={handleModalOpen} />
      {open && (
        <Modal
          movies={movies}
          modalIndex={modalIndex}
          handleModalOpen={handleModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default App;
