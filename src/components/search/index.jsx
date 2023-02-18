import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSearch = () => history.push("?search=" + input.trim());

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setInput("");
    }
  };

  return (
    <div>
      <label className="relative block">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="placeholder:italic placeholder:text-slate-400 block bg-slate-800 w-full rounded-md py-1 pl-3 pr-3 shadow-sm focus:outline-none sm:text-sm text-gray-300"
          placeholder="Search"
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default Search;
