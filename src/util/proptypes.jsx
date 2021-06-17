import PropTypes from "prop-types";
const { arrayOf } = PropTypes;
//props = array of movies to display
//single movie json (typescript save us.)
export const moviesProps = arrayOf({
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

export const movieProps = {
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
};
