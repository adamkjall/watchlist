import React from "react";
import { BASE_IMG_URL } from "~/lib/themoviedb";

export default function MoviePoster({ movie }) {
  return (
    <img
      className="rounded-lg"
      src={`${BASE_IMG_URL}/w185${movie.poster_path}`}
      alt="Poster"
    />
  );
}
