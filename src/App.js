import { BrowserRouter as Router } from "react-router-dom";

import Feed from "./pages/feed";

function App() {
  return (
    <Router>
      <div className="App">
        <Feed />
      </div>
    </Router>
  );
}

export default App;
