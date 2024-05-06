
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/home.js';
import LeftSidebar from './pages/home/leftSidebar/LeftSidebar.jsx';
import Profile from './pages/profile/Profile.jsx';
//import NotFound from './NotFound/NotFound.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (

 <Routes>

  <Route path='/'  element={<>
    <Topbar/>
    <Home/>
  </>} />
  <Route path='/profile-page' element={
    
    <>
    
     <Profile/>
    </>
  } />
  <Route path='*' element={ <>
    <div>
    <h2> 😐😐😑</h2>
        
        <h2>Oops , Page not Found! Please check the URL </h2>

    </div>
    </> 

  } />
   
 </Routes>
 
  
    
  );
}

export default App;
