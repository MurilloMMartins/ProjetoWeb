const express = require('express');
const app = express();


app.get('/home', (req, res) => {
    res.contentType("text/html");
    res.status(200)
    res.send("Home!");
})

app.get('/vinyls', (req, res) => {
    res.status(200)
    res.send("Vinyls");
})


const port = 8080;
app.listen(port, () => console.log(`Running on port ${port}`));
