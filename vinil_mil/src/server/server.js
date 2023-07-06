const express = require('express');
const app = express();
app.use(express.json());

const connectToDatabase = require('./connect');
connectToDatabase();

// Data models
const UserModel = require('./models/user.model');
const VinylModel = require('./models/vinyl.model');

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

app.get('/vinyls', async (req, res) => {
    try {
        const searchParam = req.query.search ? {title: {$regex: '.*' + req.query.search + '.*', $options: 'i'}} : {};

        const vinylList = await VinylModel.find(searchParam);
        const formattedVinylList = vinylList.map(vinyl => {
            const formattedVinyl = vinyl.toObject();
            formattedVinyl._id = vinyl._id.toHexString();
            return formattedVinyl;
        });
        res.status(200);
        res.json(formattedVinylList);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.post('/vinyls', async (req, res) => {
    try {
        await VinylModel.create(req.body);
        res.status(201);
        res.json({"message": "vinyl successfully created"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.patch('/vinyls/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await VinylModel.findByIdAndUpdate(id, req.body);
        res.status(200);
        res.json({"message": "vinyl successfully updated"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.delete('/vinyls/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await VinylModel.findByIdAndDelete(id);
        res.status(200);
        res.json({"message": "vinyl successfully deleted"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

const port = 8080;
app.listen(port, () => console.log(`Running on port ${port}`));
