import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

function SearchView() {
    let [newGif, setGif] = useState('');
    const searchReducer = useSelector((store) => store.searchReducer)

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
            <div className="inputs">
                <TextField label="Search for a gif" variant="standard" value={newGif.name} onChange={handleNameChange}/>
                {/* <input placeholder="Search for a gif, or don't" 
                value={newGif.name}
                onChange={handleNameChange} /> */}
                <div id="submit-btn">
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
            </div>
            <div>
                {searchReducer.map((search) => {
                    return (
                        <img key={search.id} className="gif" src={search.images.original.url} />
                    );
                })}
            </div>
        </form>
    );
}

//For Favoriting the GIF once map of GIFs is made
//             <button type="submit" onClick={addFavorite}>Favorite</button>

export default SearchView;
