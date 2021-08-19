import { BASE_IMG_URL } from "../../lib/themoviedb";

export default function MovieCard({ title, rating, posterPath }) {
  const posterURL = posterPath
    ? `${BASE_IMG_URL}/w342${posterPath}`
    : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`;

  return (
    <div className="w-full">
      <img
        src={posterURL}
        alt={`Movie poster: ${title}`}
        className="object-cover w-full"
      />
      <div>{rating}</div>
    </div>
  );
}
