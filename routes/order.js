const {Router} = require("express");

const path=require("path");

const Order = require("../models/order");


const router=Router();




router.route('/:id').get(async(req,res)=>{
    const orderId= await Order.findById(req.params.id);
    return res.json("Order",{user:req.user,orderId});
});


router
.route('/')
.post(async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const {orderId,quantity}=req.body;
    await Order.create({
        orderId:orderId,
        quantity:quantity,
        userId:req.userId,
       
    })
    res.redirect("/");
})


module.exports=router;