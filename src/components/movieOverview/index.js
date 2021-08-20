import { useEffect, useState } from "react";

import { fetchMovieDetails } from "../../lib/themoviedb";

export default function MovieOverview({ movieId, handleClose }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await fetchMovieDetails(movieId);
      setMovie(movie);
    };

    fetchMovie();

    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  console.log("movie", movie);
  return (
    <div className="fixed inset-0 bg-gray-600">
      <button onClick={handleClose} className="text-white">
        Close
      </button>
    </div>
  );
}
