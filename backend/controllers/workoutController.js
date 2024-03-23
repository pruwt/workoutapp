const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
//get all workouts
const getWorkouts = async(req,res)=>{
    const user_id = req.user._id

    const workouts = await Workout.find({user_id}).sort({createdAt: -1}) //to get all the docs and then by latest creation sorting
    res.status(200).json(workouts)//all workout docs sent as json to client
}


//get a single workout 
const singleWorkout = async(req,res)=>{
    const {id} = req.params //get the id route part, to get single
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    
    const workout = await Workout.findById(id) //to check in docu

    if(!workout){
        return res.status(404).json({error: "Workout does not exist"})
    }

    //get the response 

    res.status(200).json(workout)
}


//create new workout 
//add doc to db 
const createWorkout =  async(req,res)=>{
    
    const {title,reps,set,load} = req.body

    let emptyFields = []
    
    if(!title){
        emptyFields.push('title')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(!set){
        emptyFields.push('set')
    }
    if(!load){
        emptyFields.push('load')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill all fields',emptyFields})
    }


    //create new doc, incase of error , try catch
    try{
        const user_id = req.user._id
        const workout = await Workout.create({
            title,reps,set,load,user_id})
            res.status(200).json(workout) //send workout doc created
    } catch(error){
        res.status(400).json({error: error.message}) //send error stat and json respose
    }
}

//delete workout
    //get id
    //make sure it's valid
    //if valid, then delete
 const deleteWorkout = async(req,res)=>{
    const {id} = req.params //get the id route part, to get single

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }
    const workout = await Workout.findOneAndDelete({_id:id})

    //do we have the workout
    if(!workout){
        return res.status(404).json({error: "Workout does not exist"})
    }

    res.status(200).json(workout)

 }


//update a workout
 const updateWorkout = async (req,res)=>{
    const {id} = req.params //get the id route part, to get single
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such workout'})
    }

    //update the workout

    const workout = await Workout.findOneAndUpdate({_id: id},{
    //req.body to get the specif props to update
        ...req.body // it wi'' update whatever changes is to this ...req.body
    })
    
    if(!workout){
        return res.status(404).json({error: "Workout does not exist"})
    }

    res.status(200).json(workout)
}



module.exports = {
   createWorkout,
   getWorkouts,
   singleWorkout,
   deleteWorkout,
   updateWorkout

}