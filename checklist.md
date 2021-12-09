[ ] Group Giphy Saga Project
  [x] npm install
  [x] Setup Database
    [x] table(s)
      [x] Favorites Table
        [x] "id", "name", "category_id" (foreign key)
    [x] JOIN
      [x] Favorites Table & Category Table

[ ] TWO VIEWS
  [ ] Routes -> push.history()

  [ ] Search View
    [x] default db setup
    [ ] Search Input Field - POST Route through to db 'text string'
      [ ] Switch Statement? 
      [ ] Results to DOM - React
      [ ] Display all results on page load 
      [ ] Filter to category results onClick
      [ ] query db for results
      [ ] Button to advance to Favorites View
      [ ] Create 

  [ ] Favorites View
    [ ] Display GIFs by Favorites (GET route from reducer GET favorites)
    <!-- [ ] GIFs come from db without categories -->
    <!-- [ ] Once user has sent to Favorites, can assign category from db list -->

  [ ] Reducers
    [ ] Favorite GIFs - favoriteReducer
    [ ] Search Results

  [ ] Sagas
    [ ] rootSaga - watcher
    [ ] GET - fetchAllGIFs
      [ ] keep it local? - probably not
    [ ] POST Saga - adding new favorite image
    [ ] PUT - set category on image

  [x] - .env 
    
index.js - 
    [ ] - Sagas
    [ ] - Reducers
    [ ] - Middleware, Logger
    [ ] - Watcher

SearchView -
    [ ] - POST route
    [ ] - .map -> gifs with favorite buttons
    [ ] - add category drop-down menu

Favorite - 
    [ ] - PUT route

  .env -
    [ ] api key

    Tasks, Round 1:
      - GET Route
      