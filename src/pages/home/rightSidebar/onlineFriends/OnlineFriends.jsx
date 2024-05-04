import React from 'react'
import "./onlineFriends.css";

function OnlineFriends({friend}) {
  return (
    <div className='allOnlineFriends'>
         <img
            src={friend.profilePicture}
            alt="onlinefriends"
            className="onlineFriendsImg"
          />
          <span className="online"></span>
          <h5>
            {friend.username}
          </h5>
    </div>
  )
}

export default OnlineFriends