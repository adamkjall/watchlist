import { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import Feed from "~/components/feed";
import MovieDetails from "~/components/details";

import { fetchMovies, searchAPI } from "~/lib/themoviedb";

const MovieFeed = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({
    selection: "Trending",
    page: 1,
    search: "",
  });
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const history = useHistory();
  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const fetchedMovies = await fetchMovies(
        filter.selection,
        filter.page,
        filter.search
      );

      if (filter.page === 1) setMovies(fetchedMovies);
      else setMovies([...movies, ...fetchedMovies]);
      setLoading(false);
    };

    getMovies();
  }, [filter]);

  useEffect(() => {
    const searchQuery = search.split("=")[1];

    if (searchQuery?.length > 1) handleFilterChange("Search", searchQuery);
  }, [search]);

  // TODO you can only filter on "NEW" "TRENDING" "POPULAR"
  const handleFilterChange = (selection, search = "") => {
    setFilter({
      selection: selection,
      page: 1,
      search,
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
