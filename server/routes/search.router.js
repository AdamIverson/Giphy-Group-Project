const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();


router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${req.query.q}`
    }).then((response) => {
        console.log('response: ', response);
        res.send(response.data.data);
    })
});

module.exports = router;
