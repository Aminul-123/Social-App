import React from 'react'
import "./closeFriend.css";
function CloseFriend({user}) {
  return (
    <div>
         <div>
        <img  className="connected-people-image" src={user.profilePicture} alt="profile" />
          <h5 className="connected-people-name">

{user.username}
          </h5>
          </div>
    </div>
  )
}

export default CloseFriend