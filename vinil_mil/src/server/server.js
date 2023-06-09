const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.use((req, res, next) => {
    console.log(`=== NEW REQUEST ===`);
    console.log(`IP: ${req.ip}`);
    console.log(`Method: ${req.method}`);
    console.log(`Path: ${req.path}`);
    console.log(`Datetime: ${new Date()}`);
    console.log(`Headers:\n${JSON.stringify(req.headers, null, 2)}\n`);
    console.log(`Body:\n${JSON.stringify(req.body, null, 2)}`);
    next();
});

const connectToDatabase = require('./connect');
connectToDatabase();

// Data models
const UserModel = require('./models/user.model');
const VinylModel = require('./models/vinyl.model');
const CartModel = require('./models/cart.model');
const { dirname } = require('path');

app.get('/healthcheck', (req, res) => {
    res.contentType("text/html");
    res.status(200)
    res.send("Hello, World!");
})

app.get('/user', async (req, res) => {
    try {
        const users = await UserModel.find().select('username email admin_privileges');
        res.status(200);
        res.json(users);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.post('/user', async (req, res) => {
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

app.post('/register', async (req, res) => {
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

app.patch('/user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.findByIdAndUpdate(id, req.body);
        res.status(201);
        res.json({"message": "user successfully updated"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.get('/vinyl', async (req, res) => {
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

app.post('/vinyl', async (req, res) => {
    try {
        await VinylModel.create(req.body);
        res.status(201);
        res.json({"message": "vinyl successfully created"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.patch('/vinyl/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await VinylModel.findByIdAndUpdate(id, req.body);
        res.status(201);
        res.json({"message": "vinyl successfully updated"});
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send(error.message);
    }
})

app.delete('/vinyl/:id', async (req, res) => {
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

app.get('/cart/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await CartModel.find({user_id: id});
        res.status(200);
        res.json(cart);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})


app.patch('/cart', async(req, res) => {
    try {
        const user_id = req.body.user_id;
        let cart = await CartModel.findOne({user_id: user_id});
        if (cart) {
            cart.items = req.body.items;
        } else {
            cart = new CartModel({
                user_id: user_id,
                items: req.body.items
            });
        }
        await cart.save();
        res.status(201);
        res.json({"message": "cart sucessfully updated"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.delete('/cart/:user_id', async (req, res) => {
    try {
        const user_id = req.params.user_id;
        const cart = await CartModel.findOneAndDelete({user_id: user_id});
        
        if (cart === null || cart === undefined) {
            res.status(404);
            res.json({"message": "cart not found for this user id"});
        } else {
            res.status(200);
            res.json({"message": "cart successfully deleted"});
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
})

app.post('/image', (req, res) => {
    const rawImage = req.body.image;
    
    const image = rawImage.replace(/^data:image\/png;base64,/, "");
    if (!image) return res.sendStatus(400);
    
    const currPath = __dirname + "/../data/placeholders/vinyl/"
    const name = req.body.name;
    console.log(name);
    fs.writeFile(currPath + name + ".png", image, 'base64', function(err) {
        console.log(err);
    });

    res.sendStatus(200);
});

app.post('/audio', (req, res) => {
    const rawAudio = req.body.audio;

    const audio = rawAudio.replace(/^data:audio\/mpeg;base64,/, "");
    if (!audio) return res.sendStatus(400);
    
    const currPath = __dirname + "/../data/audio-previews/"
    const name = req.body.name;
    fs.writeFile(currPath + name + ".mpeg", audio, 'base64', function(err) {
        console.log(err);
    });
    res.sendStatus(200);
});

const port = 8080;
app.listen(port, () => console.log(`Running on port ${port}`));
