require("dotenv").config()
const express=require("express");
const path =require("path");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const connectDB = require("./connection");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");
const  Order =require("./models/order")

const PORT=8000;
const app=express();


connectDB(process.env.MONGO_URL )
    .then(()=>{console.log("MongoDB connected")})
    .catch((err)=>{console.log(`Error connecting mongoDB:${err}` )})

 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))


app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use("/user",userRoute);
app.use("/order",orderRoute)
app.use(express.static(path.resolve('./public')));


app.get("/",async(req,res)=>{
    
    return res.render("home",{user: req.user,});
})

app.listen(PORT,()=>{console.log(`Server started at port:${PORT}`)});