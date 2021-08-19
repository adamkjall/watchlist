import { useEffect, useState } from "react";

import MovieCard from "../../components/movieCard";

import { fetchPopularMovies, fetchTrendingMovies } from "../../lib/themoviedb";

export default function Feed() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const pMovies = await fetchPopularMovies();
      setPopularMovies(pMovies);
      const tMovies = await fetchTrendingMovies();
      setTrendingMovies(tMovies);
    };

    getMovies();
  }, []);

  //   console.log(popularMovies);
  console.log(trendingMovies);
  return (
    <div>
      <h2>Popular</h2>
      <div className="grid gap-2 justify-items-center mx-4" style={{gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))"}}>

      {popularMovies.map((movie) => (
          <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
          year={movie.release_date}
          />
          ))}
          </div>

    </div>
  );
}
