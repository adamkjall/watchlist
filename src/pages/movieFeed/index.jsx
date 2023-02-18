import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Feed from "~/components/feed";
import MovieDetails from "~/components/details";

import { fetchMovies } from "~/lib/themoviedb";

const MovieFeed = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({
    selection: "Trending",
    page: 1,
    search: "",
  });
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const fetchedMovies = await fetchMovies(filter.selection, filter.page);

      if (filter.page === 1) setMovies(fetchedMovies);
      else setMovies([...movies, ...fetchedMovies]);
      setLoading(false);
    };

    getMovies();
  }, [filter]);

  // TODO you can only filter on "NEW" "TRENDING" "POPULAR"
  const handleFilterChange = (filter) => {
    setFilter({
      selection: filter,
      page: 1,
    });
  };

  const loadMore = () => setFilter({ ...filter, page: filter.page + 1 });

  return (
    <>
      <Feed
        items={movies}
        handleFilterChange={handleFilterChange}
        loadMore={loadMore}
        selection={filter.selection}
        loading={loading}
      />
      {movieId && <MovieDetails movieId={movieId} />}
    </>
  );
};

export default MovieFeed;
