import { useRef, useCallback, useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

import Feed from "~/components/feed";
import MovieDetails from "~/components/details";

import { fetchMovies } from "~/lib/themoviedb";

const MovieFeed = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState(() => ({
    selection: "Trending",
    page: 1,
    search: "",
  }));
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const loader = useRef(null);
  const enableInfinityScroll = useRef(false);

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
      setTimeout(() => {
        enableInfinityScroll.current = true;
      }, 500);
    };
    if (!loading) {
      getMovies();
    }
  }, [filter]);

  useEffect(() => {
    const searchQuery = search.split("=")[1];

    if (searchQuery?.length > 1) {
      enableInfinityScroll.current = false;
      handleFilterChange("Search", searchQuery);
      history.replace();
      console.log("ss");
    }
  }, [search]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "30px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, []);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && enableInfinityScroll.current) {
        setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
        enableInfinityScroll.current = false;
      }
    },
    [filter, enableInfinityScroll]
  );

  // TODO you can only filter on "NEW" "TRENDING" "POPULAR"
  function handleFilterChange(selection, search = "") {
    setFilter({
      selection: selection,
      page: 1,
      search,
    });
  }

  return (
    <>
      <Feed
        items={movies}
        handleFilterChange={handleFilterChange}
        selection={filter.selection}
        loading={loading}
      />
      <div ref={loader} />
      {movieId && <MovieDetails movieId={movieId} />}
    </>
  );
};

export default MovieFeed;
