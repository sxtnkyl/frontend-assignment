import axios from "axios";

//movie/latest does not support query string > used now_playing instead
export const fetchLatestMovies = () => {
  return axios({
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`,
    type: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const fetchSingleMovies = (id) => {
  return axios({
    url: `${process.env.REACT_APP_API_DOMAIN}/movie/{${id}}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`,
    type: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const searchMovies = () => {
  return axios({
    url: `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&page=1`,
    type: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
