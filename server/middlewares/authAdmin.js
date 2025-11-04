import jwt from "jsonwebtoken"

// Admin Authentication Middleware

export const autAdmin = async(req, res, next) =>{
    try{
        const {admintoken} = req.headers
        if(!admintoken){
            res.json({success: false, message: "Not Authorized Login Again"})
        }
        const decoded_tokken = jwt.verify(admintoken, process.env.JWT_SECRET)
        if(decoded_tokken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            res.json({success: false, message: "Not Authorized Login Again"})
        }
        next();
    } catch(error){
        res.json({success: false, message: error.message})
    }
}