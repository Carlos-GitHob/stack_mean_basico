const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    //res.send("Hola, mundo de Node y Express!");
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3080, () =>  {
    console.log('Server listening on port 3000');
});