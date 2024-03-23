const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const requireAuth = async (req,res,next) => {

    //verify if user is authenticated 
   const {authorization } = req.headers

   //check if exists 

   if(!authorization){
    res.status(401).json({error: 'Authorization token required'})
   }

   const token = authorization.split(' ')[1] //token 

   //lets verify the token 
    try{
        const {_id} = jwt.verify(token,process.env.SECRET)
        
        req.user = await User.findOne({ _id }).select('_id') //just returns the id prop,
        next()
    }
    catch(error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }

}

module.exports = requireAuth