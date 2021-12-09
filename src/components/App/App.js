import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom"

import FavoritesView from '../FavoritesView/FavoritesView.jsx';

function App(props) {
  return (
    <div>
      <header>
        <h1>Hope U Like GIFs, Buddy</h1>
      </header>
      <br></br>
    
        <h1>Giphy Search!</h1>
    
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
        <Route exact path="/" element={SearchView}/>
      </Routes>
      <Routes>
        <Route exact path="/favorites" element={FavoritesView}/>
      </Routes>
      
      </Router>
    </div>
  );
};

export default App;
