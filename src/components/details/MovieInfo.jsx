import MoviePoster from "./MoviePoster";

function MovieInfo({ movie }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <MoviePoster movie={movie} />
      <div className="text-2xl">
        {movie.tagline && <em className="text-xl">"{movie.tagline}"</em>}
      </div>
      <div className="col-span-2 bg-black bg-opacity-70 px-4 py-2 rounded-lg">
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieInfo;
