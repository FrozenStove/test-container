const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const fetch = require('node-fetch');


app.use(express.static(path.resolve(__dirname, './')));

app.get('/overload', (req, res) => {
    const a = [];
    while ( 1 == 1){
        a.push(1)
    }
    return res.sendStatus(204)
});

app.get('/teapot', (req, res) => {
    console.log('teapot')
    return res.sendStatus(418)
});

app.get('/repeat', (req, res) => {

    const data = { test: 'toost' };
    setInterval(() => {
    console.log('fetching');
    fetch('http://34.82.208.190/',{
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    // .then((data) => {data.json()})
    .then((data) => {console.log(data)})
   }, 1000)
    return res.sendStatus(200)
})



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});