import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "./Modal";
import Header from "./Header";
import MovieInfo from "./MovieInfo";
import Reviews from "./Reviews";
import Trailers from "./Trailers";
import Genres from "./Genres";
import { fetchDetails } from "~/lib/themoviedb";

export default function MovieOverview({ movieId }) {
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      const type = location.state;
      const movie = await fetchDetails(movieId, type);
      setMovie(movie);
    };

    fetchMovie();
  }, [movieId, location.state]);

  console.log("movie", movie);

  // TODO if you start from a link to a movie and go back it would be nice if the modal closes instead
  const closeModal = () => history.goBack();

  return (
    <Modal
      loading={!movie}
      backdropPath={movie?.backdrop_path}
      handleClose={closeModal}
    >
      <Header movie={movie} handleClose={closeModal} />
      <Genres movie={movie} />
      <div className="flex items-start mt-5 mb-4 md:mb-12">
        <MovieInfo movie={movie} />
      </div>
      <div className="grid gap-8">
        <Trailers trailers={movie?.videos?.results} />
        <Reviews reviews={movie?.reviews} />
      </div>
    </Modal>
  );
}
