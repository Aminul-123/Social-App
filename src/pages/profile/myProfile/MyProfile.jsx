import React from 'react'
import "./myProfile.css";

function MyProfile() {
  return (
    <div className='myProfile-container'>
      <div className="profile-bg">
          <img src="https://t4.ftcdn.net/jpg/02/93/58/31/360_F_293583117_jG53zC2gYdOGERWmhpJu4o8RPAanS4T2.jpg" alt="img1"  />
          <div className='profile-person'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTql7QO1cKJ2vGPissyg8P5dvN0F0fmajfgtEoaIywuRg&s" alt="person" className='img-person'/>
        <div className='name-bio'>
          <h3>Alex Johnson</h3>
          <p>Hello This is  bio text</p>
        </div>
          </div>
      </div>
    </div>
  )
}

export default MyProfile;