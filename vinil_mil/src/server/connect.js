const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToDatabase = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ytd6gtd.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log("Failed to connect to database: ", error);
        }
        return console.log("Sucessfully connected to database!");
    })
}

module.exports = connectToDatabase;