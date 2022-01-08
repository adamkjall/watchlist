import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { BASE_IMG_URL } from "~/lib/themoviedb";

export default function MovieCard({ id, title, rating, posterPath, year }) {
  const [loading, setLoading] = useState(true);
  const match = useRouteMatch();
  const posterURL = posterPath
    ? `${BASE_IMG_URL}/w342${posterPath}`
    : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`;

  return (
    <Link
      to={`${match.url}/${id}`}
      className={`${
        loading ? "animate-pulse" : ""
      } w-full h-full bg-slate-700 shadow-md`}
    >
      <div className="text-white cursor-pointer rounded-md overflow-hidden flex flex-col justify-between h-full">
        <img
          src={posterURL}
          alt={title}
          className="object-cover w-full h-full"
          onLoad={() => setLoading(false)}
        />
        <div className="flex justify-between p-2 text-xl bg-slate-800">
          <span className="">{year}</span>
          <span className="">{rating}</span>
        </div>
      </div>
    </Link>
  );
}
