const User = require('./models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const {secret} = require('./jwtKey')

const generateAccesToken = (id) =>{
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"});
}
class authController{
    async registration(req,res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Registration error",errors})
            }
            const {username,password} = req.body
            const condidate = await User.findOne({username})
            if(condidate){
                 res.status(400).json({message:"User is already created"})
            }                                                                                                      
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({username,password:hashPassword})
            await user.save();
            return res.json({message:"User created"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message:"Registration error"})
        }

    }
    async login(req,res){

        try {
            const {username,password} = req.body
            const user = await User.findOne({username})
            console.log(user)
            if(!user){
                return res.status(400).json({message:"Not find user"})
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if(!validPassword){
                return  res.status(400).json({message:"invalid password"})
            }
            const token = generateAccesToken(user._id)
            return res.json({token});
        } catch (e) {
            console.log(e)
            res.status(400).json({message:"Login error"})
        }
        
    }
    async getUsers(req,res){
        try {
            const users = await User.find();
            res.json(users)
        } catch (e) {
            
        }
        
    }
}
module.exports = new authController