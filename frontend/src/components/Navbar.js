//importing link component
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className = "container"> 
        <Link to ="/">
            <h1>WorkoutForm </h1>
        </Link>
            </div>
        </header>
    )
}

export default Navbar