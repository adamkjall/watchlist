import Star from "~/assets/star.svg";

export default function Header({ handleClose, movie }) {
  return (
    <header className="relative flex justify-between items-start">
      <button
        className="font-bold text-white text-center text-xl md:text-2xl rounded-full bg-black/30 hover:bg-white/50 w-10 md:w-12 h-10 md:h-12 flex-shrink-0"
        onClick={handleClose}
      >
        X
      </button>
      <div className="grid gap-2 justify-items-center">
        <h1 className="text-center text-2xl md:text-4xl px-2 md:px-10">
          {movie?.title || movie?.name}
        </h1>
        <span className="text-sm md:text-2xl text-gray-300">
          (
          {movie.release_date
            ? movie.release_date.split("-")[0]
            : movie.first_air_date.split("-")[0]}
          )
        </span>
      </div>
      <div className="flex-shrink-0 flex flex-col md:flex-row">
        <div className="flex gap-1">
          <img src={Star} className="w-4 md:w-6" />
          <strong className="text-2xl md:text-3xl">
            {movie.vote_average.toFixed(1)}
          </strong>
        </div>
        <span className="text-sm md:text-md text-gray-300 ml-auto md:ml-1 md:mt-auto md:mb-1">
          ({movie.vote_count})
        </span>
      </div>
    </header>
  );
}
