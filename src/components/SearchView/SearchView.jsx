import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';


function SearchView() {
    let [newGif, setGif] = useState('');
    const searchReducer = useSelector((store) => store.searchReducer)
    console.log('in search reducer: ', searchReducer);

    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // Saves value of current text input
    const handleNameChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setGif(event.target.value);
    }

    // Submits new gif object
    const addNewGif = event => {
        event.preventDefault();
        dispatch({ 
            type: 'FETCH_SEARCHES',
            payload: newGif 
        });
        //updates the next Gif
        setGif('');
    }

    const selectCategory = (event) => {
        console.log(event.target.value);
        this.setState({
            selectValue: event.target.value
        })

    }

    const addFavorite = () => {
        console.log('in addFavorite');
        dispatch({
            type: 'ADD_FAVORITE'
        })
    }
     //---------------------------------------------------------------------

    return (
        <form onSubmit={addNewGif}>
            <input placeholder="Search for a gif, or don't" 
            value={newGif.name}
            onChange={handleNameChange} />
            <button type="submit">Submit</button>
            {searchReducer.map((search) => {
                return (
                    <img src={search.images.original.url} />
                );
            })}
        </form>
    );
}

//For Favoriting the GIF once map of GIFs is made
//             <button type="submit" onClick={addFavorite}>Favorite</button>

export default SearchView;
