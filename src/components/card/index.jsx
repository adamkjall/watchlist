import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Star from "~/assets/star.svg";
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
      } w-full h-full bg-slate-700 shadow-md overflow-hidden md:rounded-md`}
    >
      <div className="relative text-white cursor-pointer flex flex-col justify-between h-full ">
        <img
          src={posterURL}
          alt={title}
          className="object-cover w-full h-full"
          onLoad={() => setLoading(false)}
        />
        <div className="absolute bottom-0 w-full flex justify-between p-2 text-xl bg-gradient-to-t from-black to-transparent">
          <span className="">{year}</span>
          <div className="flex gap-1">
            <img src={Star} className="w-4" />
            <span className="">{rating?.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
