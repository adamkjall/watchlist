import { BrowserRouter as Router } from "react-router-dom";

import Header from "~/components/header";
import MovieFeed from "~/pages/movieFeed";

function App() {
  return (
    <Router>
      <div className="App">
        <MovieFeed />
      </div>
    </Router>
  );
}

export default App;
