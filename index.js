
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

const port = 4000;

app.get('/games', (req, res) => {
    fetch('https://api.rawg.io/api/games?key=71dd6ebf64e741a8901130bd575a6dcb&page_size=3')
        .then(res => res.json())
        .then(data => {
            res.json(data.results)
        })
        .catch((e) => {
            console.log('something failed', e);
        })
})

app.get('/game/:id', (req, res) => {
    fetch(`https://api.rawg.io/api/games/${req.params.id}?key=71dd6ebf64e741a8901130bd575a6dcb`)
    .then(res => res.json())
    .then(data => {
        res.json(data)
    })
    .catch((e) => {
        console.log('something failed', e);
    })
})

app.get('/platforms', (req, res) => {
    fetch(`https://api.rawg.io/api/platforms?key=71dd6ebf64e741a8901130bd575a6dcb`)
    .then(res => res.json())
    .then(data => {
        res.json(data.results)
    })
    .catch((e) => {
        console.log('something failed', e);
    })
})

app.listen(port, () => {
    console.log(`Server on ; ${port}`);
});

