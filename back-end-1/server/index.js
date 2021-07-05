const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

let friends = ["Dylan", "Scott", "Steve", "Axle", "Alex", "Keegan"];

app.get('/api/users', (req, res) => {
    console.log('Request recieved');
    res.status(200).send(friends);
})

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today.</h3>`;
    res.status(200).send(phrase);
})


app.listen(4000, () => console.log('Server is listening on port 4000.'));