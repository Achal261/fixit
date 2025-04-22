import jwt from "jsonwebtoken";
import Service from "../models/ServiceSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req,res,next)=>{
    //get token from headers
    const authToken = req.headers.authorization;
    //check token exits?
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json({success:false, message:"No token, authorization denied"});
    }
    try {
        const token = authToken.split(" ")[1];
        //verify token
        const decoded=jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId=decoded.id;
        req.role=decoded.role;
        next();//must call the next function
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({message: "Token is expired"});
        }
        return res.status(401).json({success:false, message: "Invalid token"});
    }
}


export const restrict = roles=> async (req, res, next) =>{
    const userId = req.userId;
    let user; 
    const customer = await User.findById(userId);
    const service = await Service.findById(userId);
    if(customer){
        user=customer;
    }
    if(service){
        user=service;
    }
    // console.log(user.role);
    if(!roles.includes(user.role)){
        return res.status(401).json({success:false, message: "You're not authorised"});
    }
    next();
};


export const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ 
            success: false, 
            message: "No token provided" 
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ 
                success: false, 
                message: "Token has expired" 
            });
        }
        return res.status(401).json({ 
            success: false, 
            message: "Invalid token" 
        });
    }
};