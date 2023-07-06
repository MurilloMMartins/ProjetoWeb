const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    items: {
        type: Map,
        of: Number,
        default: {},
    },
});

const CartModel = mongoose.model("Cart", cartSchema);

module.exports = CartModel;
