import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { fetchMovieDetails, BASE_IMG_URL } from "../../lib/themoviedb";

export default function MovieOverview({ movieId, handleClose }) {
  const [movie, setMovie] = useState(null);

  const history = useHistory();

  useEffect(() => {
    history.listen((location, action) => {
      if (action === "POP") {
        handleClose();
      }
    });
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await fetchMovieDetails(movieId);
      setMovie(movie);
    };

    fetchMovie();

    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [movieId]);

  console.log("movie id", movieId);
  console.log("movie details", movie);
  return (
    <div className="fixed inset-0 bg-gray-600">
      <button
        className="absolute top-3 left-3 font-bold text-white text-xl z-10"
        onClick={handleClose}
      >
        BACK
      </button>
      {!movie ? (
        <h1>Loading</h1>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center text-white py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${BASE_IMG_URL}/original${movie?.backdrop_path})`,
          }}
        >
          <div className="flex">
            <img src={`${BASE_IMG_URL}/w185${movie.poster_path}`} />
            <div>
              <h1 className="text-center text-4xl">
                {movie.title}{" "}
                <span className="text-3xl text-gray-300">
                  ({movie.release_date.split("-")[0]})
                </span>
              </h1>
              <em className="block text-center text-xl mt-1">{movie.tagline}</em>
              <div className="flex justify-center space-x-2 mt-2 font-bold uppercase text-xs">
                {movie.genres.map((genre) => (
                  <div key={genre.id}>{genre.name}</div>
                ))}
              </div>
              <div className="text-center text-2xl">
                <strong>{movie.vote_average}</strong>{" "}
                <span className="text-gray-300">({movie.vote_count})</span>
              </div>
              <p className="text-center mt-4 px-4 mx-auto max-w-xl">
                {movie.overview}
              </p>
            </div>
          </div>
          <div>

          </div>
        </div>
      )}
    </div>
  );
}
