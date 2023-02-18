import React from "react";
import IMDB_Logo from "~/assets/IMDB_Logo.svg";

function MovieInfo({ movie }) {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center -mt-1">
        <div className="uppercase text-xs text-gray-300">
          {movie.genres.map((genre, index) => (
            <strong key={genre.id}>
              {genre.name}
              {movie.genres.length - 1 !== index && " / "}
            </strong>
          ))}
        </div>
        <div>
          <a
            href={`http://imdb.com/title/${movie.imdb_id}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={IMDB_Logo} alt="IMDB Logo" className="w-12" />
          </a>
        </div>
      </div>
      <div className="text-2xl mt-4">
        {movie.tagline && <em className="text-xl">"{movie.tagline}"</em>}
      </div>
      <p className="mt-4">{movie.overview}</p>
    </div>
  );
}

export default MovieInfo;
