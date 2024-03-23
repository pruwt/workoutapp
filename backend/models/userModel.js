const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true //only unique emails
    },
    password: {
        type: String, 
        required: true
    }

})



//static sign-up method 
//schema and static, 
userSchema.statics .signup = async function(email,password){
   //email and pass validation 
    if(!email || !password){
        throw Error('All fields must be filled')
    } 
    
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    
    //check if email exists
    const exists = await this.findOne({email}) //if no exist, value= null

    if(exists){
        throw Error('Email already in use')
    }

    //hash, throigh salt, then hash is stored in db
    const salt = await bcrypt.genSalt(10) //balance so that safe but loads quick
    const hash = await bcrypt.hash(password,salt)

    //create doc to store pass

    const user = await this.create({email,password: hash})

    return user
}
//static login method 

userSchema.statics.login = async function(email,password){
    //check email has a val

    if(!email || !password){
        throw Error('All fields must be filled')
    } 

    const user = await this.findOne({email}) //if no exist, value= null

    if(!user){
        throw Error('Incorrect email')
    }

    //match passwords to the email(the specific hash)

    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user 

}   


module.exports = mongoose.model('User',userSchema)