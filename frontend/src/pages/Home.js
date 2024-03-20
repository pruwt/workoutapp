import { useEffect, useState } from "react"
//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () =>{
const [workouts, setWorkouts] = useState(null)
   
useEffect(()=>{
        const fetchWorkouts = async () =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok){
                // if the response is fine
                setWorkouts(json) //array of workouts in our wcontroller, as json array
            }
        }

        fetchWorkouts()
    }, [])
    return(
        <div className="home">
           <div className = "workouts">
            {/* to map through workouts only if it is not null */}
           {workouts && workouts.map((workout)=>(
            <WorkoutDetails key= {workout._id} workout = {workout} />
           ))}
           </div>
           <WorkoutForm/>
        </div>
    )
}
export default Home