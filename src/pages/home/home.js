import React from 'react'
import "./home.css";
import LeftSidebar from './leftSidebar/LeftSidebar'
import Feed from './feed/Feed'
import RightSidebar from './rightSidebar/rightSidebar.jsx'
import Profile from '../profile/Profile.jsx';


function Home() {
  return (
   <>
   <div className="homeContainer">
   

    <LeftSidebar />
    <Profile/>
    <Feed/>
  
    <RightSidebar/>
  
   
   
   


   </div>
   
   
   </>
  )
}

export default Home