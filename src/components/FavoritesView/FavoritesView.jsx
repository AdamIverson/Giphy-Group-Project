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

    return (
        <div>
            <p>{favoritesReducer}</p>
            {/* <ul>
                {favoritesReducer.map(favoriteItem => (
                    <li key={favoriteItem.id}>
                        {favoriteItem.name}
                    </li>
                ))}
            </ul> */}
        </div>
    )
} // end FavoritesView

export default FavoritesView;

