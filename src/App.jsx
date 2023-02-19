import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "~/components/header";
import MovieFeed from "~/pages/movieFeed";
import TvFeed from "~/pages/tvFeed";
import Watchlist from "~/pages/watchlist";

function App() {
  return (
    <div className="App bg-slate-800 min-h-screen relative">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/movies/:movieId?">
            <MovieFeed />
          </Route>
          <Route path="/tvshows">
            <TvFeed />
          </Route>
          <Route path="/watchlist">
            <Watchlist />
          </Route>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
