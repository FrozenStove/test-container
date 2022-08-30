const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


app.use(express.static(path.resolve(__dirname, './')));

app.get('/overload', (req, res) => {
    const a = [];
    // for ( let i = 0; i < 10000000000000000000; i++){
    //     a.push(1)
    // }

    while ( 1 == 1){
        a.push(1)
    }
    return res.sendStatus(204)
});

app.get('/teapot', (req, res) => {
    console.log('teapot')
    return res.sendStatus(418)
});



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});