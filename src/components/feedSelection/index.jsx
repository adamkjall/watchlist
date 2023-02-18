import Search from "~/components/search";

export default function FeedSelection({
  selections = [],
  selected = "Trending",
  onSelect = () => {},
}) {
  return (
    <div className="relative flex md:justify-center items-center py-4 sticky top-0 z-10 bg-slate-900 px-4">
      <div className="flex md:justify-center items-center space-x-4 text-gray-300 md:col-span-2">
        {selections.map((selection, index) => (
          <div
            key={index}
            className={`${
              selected === selection && "font-bold"
            } uppercase cursor-pointer`}
            onClick={() => onSelect(selection)}
          >
            {selection}
          </div>
        ))}
      </div>
      <div className="absolute right-2 md:right-6 justify-self-end w-24 md:w-auto">
        <Search />
      </div>
    </div>
  );
}
