const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
//allow user access to server info

const createToken = (_id) =>{
return jwt.sign({_id}, process.env.SECRET,{expiresIn: '3d'}) //user logged in for 3d
}


//login user
const loginUser = async (req,res) =>{
    const {email,password} = req.body
    console.log(req.body)

    try{
        const user = await User.login(email,password)

        //create token 
        const token = createToken(user._id)

        return res.status(200).json({email,token})
    }
    catch(error){
        return res.status(400).json({error: error.message})
    }

}


//signup user
const signupUser = async (req,res) =>{
    const {email,password} = req.body


//to create user sign up doc
    try{
        const user = await User.signup(email,password)

        //create token 
        const token = createToken(user._id)

        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

module.exports = {loginUser,signupUser}