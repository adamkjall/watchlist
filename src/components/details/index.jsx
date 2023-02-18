import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./Modal";
import Header from "./Header";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import Reviews from "./Reviews";
import Trailers from "./Trailers";
import { fetchMovieDetails } from "~/lib/themoviedb";

export default function MovieOverview({ movieId }) {
  const [movie, setMovie] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await fetchMovieDetails(movieId);
      setMovie(movie);
    };

    fetchMovie();
  }, [movieId]);

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

      <div className="flex items-start my-10">
        <MoviePoster movie={movie} />
        <MovieInfo movie={movie} />
      </div>
      <div className="grid gap-8">
        <Trailers trailers={movie?.videos.results} />
        <Reviews reviews={movie?.reviews} />
      </div>
    </Modal>
  );
}
