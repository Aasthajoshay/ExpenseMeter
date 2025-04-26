
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const register = async (req, res) => {
    try {
        const { fullname , email , password } = req.body;
        if( !fullname || !email, !password) {
            return res.status(400).json({
                message : "All fields are required.",
                success : false
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message : "User already exists.",
                success : false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            password : hashedPassword
        });

        return res.status(201).json({
            message : "User registered successfully",
            success : true
        });
    } catch(error){
        console.log("Error in user registration : ", error);
    }
}

export const login = async (req , res ) => {
    try {
        const { email , password } = req.body;
        if( !email || !password ) {
            return res.status(400).json({
                message : "All fields are required.",
                success : false
            });
        }

        const user = await User.findOne({email});
        if( !user ) {
            return res.status(400).json({
                message : "Incorrect email or password",
                success : false
            });
        }

        const isPasswordMatch = await bcrypt.compare(password,user.password);
        
        if(!isPasswordMatch){
            return res.status(400).json({
                message : "Incorrect email or password",
                success : false
            });
        }

        const tokenData = {
            userId : user._id,
        };

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn : "1d"});

        return res.status(200).cookie("token",token,{
            maxAge : 1 *24*60*60*1000,
            httpOnly : true,
            sameSite : "strict"
        }).json(
            {
                message : `Welcome back ${user.fullname}`,
                user: {
                    _id : user._id,
                    fullname : user.fullname,
                    email : user.email
                },
                success : true
            }
        );
    } catch(error) {
        console.log("Error in user login : ", error);
    }
}



export const getProfile = (req, res) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({ user: req.user });
  };
  export const logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out" });
  };
  