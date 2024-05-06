import React from 'react'
import "./home.css";
import LeftSidebar from './leftSidebar/LeftSidebar'
import Feed from './feed/Feed'
import RightSidebar from './rightSidebar/rightSidebar.jsx'



function Home() {
  return (
   <>
   <div className="homeContainer">
   

    <LeftSidebar />
  
    <Feed/>
  
    <RightSidebar/>
  
   
   
   


   </div>
   
   
   </>
  )
}

export default Home