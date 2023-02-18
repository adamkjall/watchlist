import Card from "~/components/card";
import FeedSelection from "~/components/feedSelection";

const Feed = ({
  items,
  handleFilterChange,
  loadMore,
  loading,
  openOverview,
  selection,
  handleSelection,
}) => (
  <div className="relative max-w-screen-xl mx-auto">
    <FeedSelection
      selections={["Trending", "Popular", "New"]}
      selected={selection}
      onSelect={handleFilterChange}
    />
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
    <div
      className="text-2xl text-white text-center py-10 bg-green-400 mt-8 cursor-pointer"
      onClick={loadMore}
    >
      {loading ? (
        <div className=" flex justify-center items-center">
          <div className=" h-16 w-16 border-b-4 border-t-4 border-x-gray-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <strong>LOAD MORE</strong>
      )}
    </div>
  </div>
);

export default Feed;
