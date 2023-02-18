import { Link } from "react-router-dom";

import Search from "~/components/search";

const Header = () => (
  <div className="flex justify-between text-gray-300 p-2">
    <div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </div>
    <Search />
  </div>
);

export default Header;
