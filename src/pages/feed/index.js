import { useEffect, useState } from "react";

import MovieCard from "../../components/movieCard";
import MovieOverview from "../../components/movieOverview";
import FeedSelection from "../../components/feedSelection";

import { fetchMovies } from "../../lib/themoviedb";

export default function Feed() {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState("Trending");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(selection, page, search);
      setMovies(fetchedMovies);
    };

    getMovies();
  }, [selection]);

  const handleSelect = (selection) => setSelection(selection);

  console.log("movies", movies);
  console.log("selection", selection);
  console.log("movieId", selectedMovieId);
  return (
    <div className="relative m-4">
      <FeedSelection
        selections={["Trending", "Popular", "New"]}
        selected={selection}
        onSelect={handleSelect}
      />
      <div
        className="grid gap-2 justify-items-center"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))" }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
            year={movie.release_date.split("-")[0]}
            handleClick={() => setSelectedMovieId(movie.id)}
          />
        ))}
      </div>
      {selectedMovieId && (
        <MovieOverview
          movieId={selectedMovieId}
          handleClose={() => setSelectedMovieId(null)}
        />
      )}
    </div>
  );
}
