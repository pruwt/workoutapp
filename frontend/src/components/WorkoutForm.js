import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const WorkoutForm = () => {
//create state for each workout that will be typed out
const {dispatch} = useWorkoutsContext()
const {user} = useAuthContext()

    const  [title,setTitle] = useState('')
    const  [reps,setReps] = useState('')
    const  [set,setSet] = useState('')
    const  [load,setLoad] = useState('')
    const  [error, setError] = useState(null)
    //const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        //if no user, dont run function 

        if(!user){
            setError('You must be logged in!')
            return
        }

        //dummy 
        const workout = {title,reps,set,load}

        //use fetch api to send post request 

        const response = await fetch ('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout), //changes to striing
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`

            }
        })

        const json = await response.json() //store

        //check if response is ok

        if(!response.ok){
             setError(json.error)
             //setEmptyFields(json.emptyFields)
        }
        if(response.ok){
           
            setError(null)
            setTitle('') //reset the form
            setReps('')
            setSet('')
            setLoad('')
            //setEmptyFields([])
            dispatch({type:'CREATE_WORKOUT',payload: json})
          
            
             console.log("New Workout added", json)
        }
    }
    return(
        //input fields
        <form className="create" onSubmit={handleSubmit}>
            <h3> Hello! Let's add a new workout</h3>

            <label> Exercise Title: </label>
            <input
            type="text"
            onChange={(e)=> setTitle(e.target.value)} //input target adn value
            value={title}
            //className={emptyFields.includes('title') ? 'error': ''}
            />

            <label> Load(in Kg): </label>
            <input
            type="number"
            onChange={(e)=> setLoad(e.target.value)} //input target adn value
            value={load}
            //className={emptyFields.includes('load') ? 'error' : ''}

            />

            <label> Number Reps: </label>
            <input
            type="number"
            onChange={(e)=> setReps(e.target.value)} //input target adn value
            value={reps}
            //className={emptyFields.includes('reps') ? 'error' : ''}

            />

            <label> Sets: </label>
            <input
            type="number"
            onChange={(e)=> setSet(e.target.value)} //input target adn value
            value={set}
            //className={emptyFields.includes('set') ? 'error' : ''}

            />
           
           <button>Add Workout</button>
           {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm