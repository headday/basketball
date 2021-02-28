const User = require('./models/User')
const bcrypt = require('bcrypt');
class authController{
    async registration(req,res){
        try {
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
            
        } catch (e) {
            console.log(e)
            res.status(400).json({message:"Login error"})
        }
        
    }
    async getUsers(req,res){
        try {
            res.json("server work")
        } catch (e) {
            
        }
        
    }
}
module.exports = new authController