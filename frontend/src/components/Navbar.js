//importing link component
import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"


const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className = "container"> 
        <Link to ="/">
            <h1>WorkoutForm </h1>
        </Link>
        <nav>
           
           {user && ( 
           <div>
                {/* output user when logged in basically */}  
                <span>{user.email}</span>
                <button onClick={handleClick}>logout</button>
            </div>
            )}
            { !user &&(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
            )}
            <div>
             <Link to="/calorie-calculator">Calorie Calculator</Link>
            </div>
            <div>
            <Link to="/workouts-res">Workouts</Link> {/* Route to Workouts page */}
          </div>
        </nav>
            </div>
        </header>
    )
}

export default Navbar