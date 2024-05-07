
import './App.css';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Topbar from './components/topbar/Topbar';
import Groups from './pages/groups/Groups.jsx';
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
  <Route path='/login-page' element={<>
  
  <Login/>
  </>}
   />
   <Route path='/register-page' element={
    <>
    <Register/>
    </>
   } />
   <Route path='/groups' element={<>
   <Topbar/>
   <LeftSidebar/>
   <Groups/>

   
    </>} />
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
