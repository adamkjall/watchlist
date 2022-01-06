import { useEffect, useState } from "react";

import Feed from "../../components/feed";
import MovieOverview from "../../components/overviewModal";

import { fetchMovies } from "../../lib/themoviedb";

const MovieFeed = () => {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState("Trending");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(selection, page, search);
      console.log("fe", fetchedMovies);
      setMovies(fetchedMovies);
    };

    getMovies();
  }, [selection]);

  const handleSelect = (selection) => setSelection(selection);

  console.log("movies", movies);
  console.log("selection", selection);
  console.log("movieId", selectedMovieId);
  return (
    <>
      <Feed
        items={movies}
        handleFilterChange={setSelection}
        loadMore={() => {}}
        openOverview={handleSelect}
        selection={selection}
        setSelectedMovieId={setSelectedMovieId}
      />
      {selectedMovieId && (
        <MovieOverview
          movieId={selectedMovieId}
          handleClose={() => setSelectedMovieId(null)}
        />
      )}
    </>
  );
};

export default MovieFeed;
