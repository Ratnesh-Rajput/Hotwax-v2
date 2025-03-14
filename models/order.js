const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        orderId: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
