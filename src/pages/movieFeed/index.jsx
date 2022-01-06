import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import Feed from "~/components/feed";
import MovieOverview from "~/components/overviewModal";

import { fetchMovies } from "~/lib/themoviedb";

const MovieFeed = () => {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState("Trending");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(selection, page, search);
      console.log("fe", fetchedMovies);
      setMovies(fetchedMovies);
    };

    getMovies();
  }, [selection]);
  console.log("heklo");

  return (
    <>
      <Feed
        items={movies}
        handleFilterChange={setSelection}
        loadMore={() => {}}
        selection={selection}
      />
      {movieId && <MovieOverview movieId={movieId} />}
    </>
  );
};

export default MovieFeed;
