//all the workout routes
const express = require('express');
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
   singleWorkout,
   deleteWorkout,
   updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//req auth for all workout routes
router.use(requireAuth) //in order to access the apis they must be authenticated

//get all workouts
router.get('/',getWorkouts)

//GET a single workout (need the id of the particular one creating)
router.get('/:id',singleWorkout)

//POST a new workout 
router.post('/',createWorkout)

//DELETE a new workout 
router.delete('/:id',deleteWorkout)

//UPDATE a new workout 
router.patch('/:id',updateWorkout)


module.exports = router

