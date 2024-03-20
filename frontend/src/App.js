import{BrowserRouter, Routes, Route} from 'react-router-dom'
// pages and components
import Home from './pages/Home'
import Navbar  from './components/Navbar';

function App() {
  return (
    <div className="App">
     {/* all pages */}
     <BrowserRouter> 
        <Navbar></Navbar>
      <div className='pages'>
        <Routes>
    {/* have all the routes */}
    <Route
      path="/"
      element ={<Home/>}
    />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
