import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
// pages and components
import Home from './pages/Home'
import Navbar  from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CalorieBurnedCalculator from './components/CalorieBurnedCalculator';
import WorkoutsPage from './pages/WorkoutsPage';
function App() {

  const {user} = useAuthContext()

  return (
    <div className="App">
      {/* <CalorieBurnedCalculator /> */}
     {/* all pages */}
     <BrowserRouter> 
        <Navbar></Navbar>
      <div className='pages'>
        <Routes>
    {/* have all the routes */}
    <Route
      path="/"
      element ={user ? <Home/> : <Navigate to ="/login"/>}
    />
    <Route
      path="/login"
      element ={!user ? <Login/> : <Navigate to="/"/>}
    />
    <Route
      path="/signup"
      element ={ !user ? <Signup/> : <Navigate to="/"/>}
    />
    <Route
      path="/calorie-calculator"
      element ={ user ? <CalorieBurnedCalculator/> : <Navigate to="/login"/>}
    />
    <Route
      path="/workouts-res"
      element ={ user ? <WorkoutsPage/> : <Navigate to="/login"/>}
    />

        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
