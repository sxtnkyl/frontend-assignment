import MovieCard from "./movieCard";
import { moviesProps } from "../../util/proptypes";

const DisplayBody = ({ handleModalOpen, movies }) => {
  return (
    <div>
      <h2>Most Recent Movies</h2>
      {movies.map((movie, i) => {
        return (
          <MovieCard
            key={i}
            index={i}
            handleModalOpen={handleModalOpen}
            {...movie}
          />
        );
      })}
    </div>
  );
};

export default DisplayBody;

DisplayBody.prototypes = {
  movies: moviesProps,
};
