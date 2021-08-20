import { BASE_IMG_URL } from "../../lib/themoviedb";

export default function MovieCard({ title, rating, posterPath, year, handleClick }) {
  const posterURL = posterPath
    ? `${BASE_IMG_URL}/w342${posterPath}`
    : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`;

  return (
    <div className="w-full bg-gray-300 cursor-pointer" onClick={handleClick}>
      <img
        src={posterURL}
        alt={`Movie poster: ${title}`}
        className="object-cover w-full"
      />
      <div className="flex justify-between m-2">
        <div className="">{year}</div>
        <div className="">{rating}</div>
      </div>
    </div>
  );
}
