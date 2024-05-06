import React from 'react'
import "./profile.css";
import LeftSidebar from '../home/leftSidebar/LeftSidebar'
import MyProfile from './myProfile/MyProfile'
//import { useParams } from 'react-router-dom'
import Share from "../home/feed/share/Share.jsx"

function Profile() {
  //const { username } = useParams();
  return (
    <>
 {/* // <h1>Hello , {username} , Welcome to your profile page .</h1> */}
<div className="profile-page">

 <LeftSidebar/>
 <div className="myProfile">
 <MyProfile/>
 <Share/>

 </div>
 
 
 </div>
    </>
  )
}

export default Profile