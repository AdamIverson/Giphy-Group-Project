import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';

function SearchView() {
    //Initial state is an OBJECT, with keys id and name
    let [newGif, setGif] = useState('');

    // Declare dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    // Saves value of current text input
    const handleNameChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setGif({...newGif, name: event.target.value})
    }

    // Submits new gif object
    const addNewGif = event => {
        event.preventDefault();
        dispatch({ 
            type: 'GET_RESULTS',
            payload: newGif 
        });
        //updates the next Gif
        setGif('');
    }

    return (
        <form onSubmit={addNewGif}>
            <input placeholder="Search for a gif, or don't" 
            value={newGif.name}
            onChange={handleNameChange} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SearchView;
