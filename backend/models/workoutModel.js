//define( how our workout document will look like (schema)
const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required:true
    },
    set: {
        type: Number,
        required:true
    },
    load: {
        type: Number,
        required:true
    },
    user_id:{
        type: String,
        required: true
    }
},{timestamps: true })

module.exports = mongoose.model('Workout',workoutSchema) //model to import


