const { Router } = require("express");
const Order = require("../models/order");

const router = Router();

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const { orderId, quantity } = req.body;

        if (!orderId || !quantity) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newOrder = await Order.create({
            orderId,
            quantity,
                 });

        return res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid order ID format" });
        }

      
        const order = await Order.findById(id); 
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.json({ message: "Order found", order });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body; // assuming you're sending updated data in the request body

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid order ID format" });
        }

        const order = await Order.findByIdAndUpdate(id, updatedData, { new: true }); 
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.json({ message: "Order updated successfully", order });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body; // assuming you're sending partial updated data

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid order ID format" });
        }

        const order = await Order.findByIdAndUpdate(id, updatedData, { new: true }); 
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.json({ message: "Order partially updated", order });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid order ID format" });
        }

        const order = await Order.findByIdAndDelete(id); 
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.json({ message: "Order deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});


router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const { orderId, quantity } = req.body;

        if (!orderId || !quantity) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newOrder = await Order.create({
            orderId,
            quantity,
                 });

        return res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
});

module.exports = router;


