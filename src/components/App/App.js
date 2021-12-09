import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom"

function App(props) {
  return (
    <div>
      <header>
        <h1>Hope U Like GIFs, Buddy</h1>
      </header>
      <br></br>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      <Routes>
        <Route exact path="/" element={FavoriteView}/>
      </Routes>
      <Routes>
        <Route exact path="/favorites" element={FavoritesView}/>
      </Routes>
      
      </Router>
    </div>
  );
};

export default App;
