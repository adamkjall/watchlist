import { useEffect, useState } from "react";

import MovieCard from "../card";
import FeedSelection from "../../components/feedSelection";

import { fetchMovies } from "../../lib/themoviedb";

export default function Feed({ items, handleFilterChange, loadMore, openOverview }) {

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies(selection, page, search);
      setMovies(fetchedMovies);
    };

    getMovies();
  }, [selection]);

  const handleSelect = (selection) => setSelection(selection);

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
    </div>
  );
}
