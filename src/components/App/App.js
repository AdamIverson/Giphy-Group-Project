import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom"

import FavoritesView from '../FavoritesView/FavoritesView.jsx';

function App(props) {
  return (
    <div>
      <header>
        <h1>Hope U Like GIFs, Buddy</h1>
      </header>
      <br></br>
      <div>
        <h1>Giphy Search!</h1>
        <h3>Favorites!</h3>
        <FavoritesView />
      </div>

    </div>
  );
}

export default App;
