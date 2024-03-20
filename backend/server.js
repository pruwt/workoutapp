//reg express app 
require ('dotenv').config()
const express = require('express');
const workoutroutes = require('./routes/workouts');
const mongoose = require('mongoose');
const app = express(); //express app

//middleware logger for each req and type of req
app.use(express.json());

app.use((req,res,next)=>{ 
console.log(req.path, req.method)
next()
})
//routes
// app.get('/',(req,res) =>{
//     res.json({msg: 'Welcone to the app'})
// })

//connect to db 
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    //listen for reqs once connected to db
    app.listen(process.env.PORT, () =>{
    console.log ('connected to db and listening on port 4000!')
})
    })
    .catch((error)=>{
        console.log(error)
    })


app.use('/api/workouts',workoutroutes)//path first then gets all the routes we've attached, e.g get handler, post etc

//listen for requests 
