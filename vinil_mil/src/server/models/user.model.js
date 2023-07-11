const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    card_number: {
        type: String,
        required: false,
    },
    admin_privileges: {
        type: Boolean,
        required: true,
    },
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
