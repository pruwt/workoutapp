import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () =>{

   const {workouts,dispatch} = useWorkoutsContext()
   const {user} = useAuthContext()

   
useEffect(()=>{
        const fetchWorkouts = async () =>{
            //fetch only when user is logged in 
            const response = await fetch('/api/workouts',{
                headers:{
                    'Authorization' : `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok){
                // if the response is fine
                dispatch({type: 'SET_WORKOUTS',payload: json})
            }
        }

        if (user){
        fetchWorkouts()
    }
    }, [dispatch,user])
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