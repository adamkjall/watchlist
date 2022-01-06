import { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { fetchMovieDetails, BASE_IMG_URL } from "~/lib/themoviedb";

export default function MovieOverview({ movieId, handleClose }) {
  const [movie, setMovie] = useState(null);
  const overviewRef = useRef();
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

  const clickOnOverlay = (event) => {
    const isClickOnOverlay =
      overviewRef.current && !overviewRef.current.contains(event.target);
    if (isClickOnOverlay) handleClose();
  };

  console.log("movie id", movieId);
  console.log("movie details", movie);
  return (
    <div
      className="fixed inset-0 bg-gray-600/75 flex justify-center md:px-16 md:py-12 overflow-scroll"
      onClick={clickOnOverlay}
    >
      <div
        className="relative text-shadow-lg min-h-full w-full max-w-screen-xl "
        ref={overviewRef}
      >
        {/* <button
          className="absolute top-3 left-3 font-bold text-white text-xl z-10"
          onClick={handleClose}
        >
          X
        </button> */}
        {!movie ? (
          <h1>Loading</h1>
        ) : (
          <div
            className="bg-cover bg-no-repeat bg-center text-white p-6 md:rounded-xl mb-16 min-h-full bg-gray-700"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BASE_IMG_URL}/original${movie?.backdrop_path})`,
            }}
          >
            <header className="relative flex justify-between items-start">
              <button
                className="font-bold text-white text-center text-2xl rounded-full bg-black/30 hover:bg-white/50 w-12 h-12 flex-shrink-0"
                onClick={handleClose}
              >
                X
              </button>
              <h1 className="text-center text-4xl px-10">
                {movie.title}{" "}
                <span className="text-3xl text-gray-300">
                  ({movie.release_date.split("-")[0]})
                </span>
              </h1>
              <div className="flex-shrink-0">
                <strong className="text-3xl">{movie.vote_average}</strong>{" "}
                <span className="text-gray-300">({movie.vote_count})</span>
              </div>
            </header>
            <body className="my-10">
              <div className="flex items-start">
                <img
                  className="rounded-lg"
                  src={`${BASE_IMG_URL}/w185${movie.poster_path}`}
                />
                <div className="px-4">
                  <div className="flex justify-between items-center -mt-1">
                    <div className="uppercase text-xs text-gray-300">
                      {movie.genres.map((genre, index) => (
                        <strong key={genre.id}>
                          {genre.name}
                          {movie.genres.length - 1 !== index && " / "}
                        </strong>
                      ))}
                    </div>
                  </div>
                  <div className="text-2xl mt-4">
                    {movie.tagline && (
                      <em className="text-xl">"{movie.tagline}"</em>
                    )}
                  </div>
                  <p className="mt-4">{movie.overview}</p>
                </div>
              </div>
            </body>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
