export default function FeedSelection({
  selections = [],
  selected = "Trending",
  onSelect = () => {},
}) {
  return (
    <div className="flex justify-center space-x-4 my-4 text-gray-300">
      {selections.map((selection, index) => (
        <div
          key={index}
          className={`${
            selected === selection && "underline"
          } uppercase font-semibold cursor-pointer`}
          onClick={() => onSelect(selection)}
        >
          {selection}
        </div>
      ))}
    </div>
  );
}
