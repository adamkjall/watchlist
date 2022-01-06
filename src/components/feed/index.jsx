import MovieCard from "~/components/card";
import FeedSelection from "~/components/feedSelection";

const Feed = ({
  items,
  handleFilterChange,
  loadMore,
  openOverview,
  selection,
  handleSelection,
  setSelectedMovieId,
}) => (
  <div className="relative m-4">
    <FeedSelection
      selections={["Trending", "Popular", "New"]}
      selected={selection}
      onSelect={handleFilterChange}
    />
    <div
      className="grid gap-2 justify-items-center"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))" }}
    >
      {items.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          rating={movie.vote_average}
          year={movie.release_date.split("-")[0]}
          handleClick={() => setSelectedMovieId(movie.id)}
        />
      ))}
    </div>
  </div>
);

export default Feed;
