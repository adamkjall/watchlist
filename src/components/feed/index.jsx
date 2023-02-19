import Card from "~/components/card";
import FeedSelection from "~/components/feedSelection";
import Spinner from "~/components/Spinner";

const Feed = ({
  items,
  handleFilterChange,
  loadMore,
  loading,
  openOverview,
  selection,
  handleSelection,
}) => (
  <>
    <FeedSelection
      selections={["Trending", "Popular", "New"]}
      selected={selection}
      onSelect={handleFilterChange}
    />
    <div className="max-w-screen-xl mx-auto sm:px-2 md:px-6 md:mt-6">
      <div
        className="grid md:gap-6 justify-items-center auto-rows-fr"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(225px, 1fr))" }}
      >
        {items.map((movie, index) => (
          <Card
            key={movie.id + "-" + index}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            rating={movie?.vote_average}
            year={movie.release_date ? movie?.release_date.split("-")[0] : null}
            type={movie?.media_type}
          />
        ))}
      </div>
      <div className="py-12">{loading && <Spinner />}</div>
    </div>
  </>
);

export default Feed;
