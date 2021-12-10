import React from 'react';
import SearchView from '../SearchView/SearchView';
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
    
        <Route exact path="/" >
          <SearchView />
        </Route>

        <Route exact path="/favorites" >
          <FavoritesView />
        </Route>
      
      </Router>
    </div>
  );
};

export default App;
