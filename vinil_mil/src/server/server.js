const express = require('express');
const app = express();
app.use(express.json());

const connectToDatabase = require('./connect');
connectToDatabase();

// Data models
const UserModel = require('./models/user.model');

app.get('/healthcheck', (req, res) => {
    res.contentType("text/html");
    res.status(200)
    res.send("Hello, World!");
})

app.get('/users', async (req, res) => {
    try {
        const user = await UserModel.find({email: req.body.email, password: req.body.password});
        if (user.length > 0) {
            res.status(200);
            res.json(user);
        } else {
            res.status(401);
            res.json({"message": "invalid email or password"});
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.post('/users', async (req, res) => {
    try {
        let user = await UserModel.find({email: req.body.email});
        if (user.length > 0) {
            res.status(409);
            res.json({"message": "email is already in use"});
        } else {
            await UserModel.create(req.body);
            res.status(201);
            res.json({"message": "user successfully created"});
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})


const port = 8080;
app.listen(port, () => console.log(`Running on port ${port}`));
