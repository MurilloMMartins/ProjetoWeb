const mongoose = require('mongoose');

const user = "vinil_mil";
const pwd = "hrjz24AvjeExkVfj";

const connectToDatabase = async() => {
    await mongoose.connect(`mongodb+srv://${user}:${pwd}@cluster0.ytd6gtd.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log("Failed to connect to database: ", error);
        }
        return console.log("Sucessfully connected to database!");
    })
}

module.exports = connectToDatabase;