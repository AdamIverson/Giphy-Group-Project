import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


// create function to display favorites on DOM
function FavoritesView() {
    const dispatch = useDispatch();

    // Make our reducer available in our component
    const favoritesReducer = useSelector(store => store.favoritesReducer);

    // useEffect so we don't get endless loop of GETs
    useEffect(() => {
        getFavorites();
    }, []);

    // create route to get favorites
    const getFavorites = () => {
        dispatch({
            type: 'FETCH_FAVORITES'
        })
    };

    // create function to display category based on category_id
    const displayCategoryName = (favoriteItem) => {
        if (favoriteItem.category_id === 1) {
            return 'Funny';
        } else if (favoriteItem.category_id === 2) {
            return 'Cohort';
        } else if (favoriteItem.category_id === 3) {
            return 'Cartoon';
        } else if (favoriteItem.category_id === 4) {
            return 'Nsfw';
        } else if (favoriteItem.category_id === 5) {
            return 'Meme';
        } else {
            return 'No category';
        }
    } // end displayCategoryName

    return (
        <div>
            <h1>Checkout your favorites!</h1>
            <ul>
                {favoritesReducer.map(favoriteItem => (
                    <div key={favoriteItem.id}>
                        {favoriteItem.name}
                        <br></br>
                        <p>Category: {displayCategoryName(favoriteItem)}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
} // end FavoritesView

export default FavoritesView;

