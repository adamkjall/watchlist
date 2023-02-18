import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSearch = () => history.push("?search=" + input.trim());

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="placeholder:italic placeholder:text-slate-400 block bg-slate-900 w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default Search;
