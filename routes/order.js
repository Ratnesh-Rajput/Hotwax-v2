const { Router } = require("express");
const Order = require("../models/order");

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("user");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        return res.json({ message: "Order found", order });
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

// const {Router} = require("express");

// const path=require("path");

// const Order = require("../models/order");


// const router=Router();




// router.route('/:id').get(async(req,res)=>{
//     const orderId= await Order.findById(req.params.id);
//     return res.json("Order",{user:req.user,orderId});
// });


// router
// .route('/')
// .post(async(req,res)=>{
//     console.log(req.body);
//     console.log(req.file);
//     const {orderId,quantity}=req.body;
//     await Order.create({
//         orderId:orderId,
//         quantity:quantity,
//         userId:req.userId,
       
//     })
//     res.redirect("/");
// })


// module.exports=router;