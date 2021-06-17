import MovieCard from "./movieCard";
import { moviesProps } from "../../util/proptypes";
import "./index.css";

const DisplayBody = ({ handleModalOpen, movies }) => {
  return (
    <section className="display-body-container">
      <h2 className="display-body-title">Most Recent Movies</h2>
      <div className="card-container">
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
    </section>
  );
};

export default DisplayBody;

DisplayBody.prototypes = {
  movies: moviesProps,
};
