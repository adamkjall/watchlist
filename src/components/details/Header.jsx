export default function Header({ handleClose, movie }) {
  return (
    <header className="relative flex justify-between items-start">
      <button
        className="font-bold text-white text-center text-2xl rounded-full bg-black/30 hover:bg-white/50 w-12 h-12 flex-shrink-0"
        onClick={handleClose}
      >
        X
      </button>
      <h1 className="text-center text-4xl px-10">
        {movie.title}{" "}
        <span className="text-3xl text-gray-300">
          ({movie.release_date.split("-")[0]})
        </span>
      </h1>
      <div className="flex-shrink-0">
        <strong className="text-3xl">{movie.vote_average.toFixed(1)}</strong>
        <span className="text-gray-300 ml-1">({movie.vote_count})</span>
      </div>
    </header>
  );
}
