function MovieInfo({ movie }) {
  return (
    <div className="px-4">
      <div className="text-2xl">
        {movie.tagline && <em className="text-2xl">"{movie.tagline}"</em>}
      </div>
      <p className="mt-3">{movie.overview}</p>
    </div>
  );
}

export default MovieInfo;
