import JWT from 'jsonwebtoken';
import usermodel from '../models/usermodel.js';

export const requireSignIn = async (req,res,next) => {
    try {    
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        const user = await usermodel.findOne({_id:decode.id});
        if(user.role==1) next();
        return res.status(403).send({
            sucess:false,
            message:"Not Authorized",
        })
    } catch (error) {
        console.log("Error in requireSignIn middleware. Error: ",error);
    }
}
