import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSearch = () => history.push("/search/" + input.trim());

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
