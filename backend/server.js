//reg express app 
require ('dotenv').config()
const express = require('express');
const workoutroutes = require('./routes/workouts');
const userroutes = require('./routes/user');
const mongoose = require('mongoose');
const cors = require('cors')

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

// const cors = require('cors');

// // const app = express();

// const allowedOrigins = ['https://frontend-flame-phi-20.vercel.app/']; // Replace with your actual domain

// const options = {
//   origin: allowedOrigins,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //   credentials: true, // Include if sending cookies
// };

app.use(cors(options));


app.use('/api/workouts',workoutroutes)//path first then gets all the routes we've attached, e.g get handler, post etc
app.use('/api/user',userroutes)//path first then gets all the routes we've attached, e.g get handler, post etc



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



//listen for requests 
