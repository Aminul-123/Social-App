import React from 'react'
import "./loginModal.css";
import { Link } from 'react-router-dom';

function LoginModal() {
  return (
    <div className='loginModalContainer'>
        <Link to="/profile-page" className="thisProfile">
        <img src="./assets/images.jpg" alt="profile" className="profile-this" />
        <h5>Alex Johnson</h5>
        </Link>
        <Link to='/login-page' className="logout">
            <button className="logout-btn">Logout</button>
        </Link>

      
    </div>
  )
}

export default LoginModal