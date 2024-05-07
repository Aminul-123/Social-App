import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register-container'>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='Name' />
        </div>
        
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' />
        </div>
        <div className="Register-btn">
            <button>Register</button>
        </div>
        <p>Do not have an account ? <Link to='/login-page'>
        <span>Login</span>
        </Link> </p> 
    </div>
  )
}

export default Register