[ ] Group Giphy Saga Project
  [x] npm install
  [x] Setup Database
    [x] table(s)
      [x] Favorites Table
        [x] "id", "name", "category_id" (foreign key)
    [x] JOIN
      [x] Favorites Table & Category Table

[ ] TWO VIEWS
  [x] Routes -> push.history()

  [ ] Search View
    [x] default db setup
    [x] Search Input Field - POST Route through to db 'text string'
      [x] Switch Statement? 
      [ ] Results to DOM - React  (Bennett)
      [ ] Filter to category results onClick  (Selam)
          - [ ] query db for results
      [x] Create - overall goal

  [ ] Favorites View
    [ ] Display GIFs by Favorites (GET route from reducer GET favorites)
      - [ ] wire favorite.router to GET favorites from db  (Kelsey)

  [x] Reducers
    [x] Favorite GIFs - favoriteReducer
    [x] Search Results

  [ ] Sagas
    [x] rootSaga - watcher
    [ ] GET - fetch all search result GIFs
    [x] GET - fetch all favorites
    [ ] POST Saga - adding new favorite image  (- Adam)
    [ ] PUT - set category on image (?)

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
      