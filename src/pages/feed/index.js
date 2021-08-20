import { useEffect, useState } from "react";

import MovieCard from "../../components/movieCard";
import FeedSelection from "../../components/feedSelection";

import { fetchMovies } from "../../lib/themoviedb";

export default function Feed() {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState("Trending");
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(selection, page, search);
      setMovies(fetchedMovies);
    };

    getMovies();
  }, [selection]);



  console.log(movies);
  console.log("selection", selection);
  const handleSelect = (selection) => setSelection(selection);

  return (
    <div>
      <FeedSelection
        selections={["Trending", "Popular", "New"]}
        selected={selection}
        onSelect={handleSelect}
      />
      <div
        className="grid gap-2 justify-items-center mx-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))" }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie.vote_average}
            year={movie.release_date.split("-")[0]}
          />
        ))}
      </div>
    </div>
  );
}
