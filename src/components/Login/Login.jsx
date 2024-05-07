import React from 'react'
import "./login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login-container'>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' />
        </div>

        <div className="login-btn">
            <button>Login</button>
        </div>

        <p>Do not have an account ? <Link to='/register-page'>
        <span>Register</span>
        </Link>
         </p> 
        
    </div>
  )
}

export default Login