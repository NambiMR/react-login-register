import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {

    const [action , setAction]=useState('');

    const registerLink =() =>{
        setAction('active');
    }

    const loginLink =() =>{
        setAction('');
    }


  return (
    <div className={`wrapper ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input">
                    <input type="text"
                    placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input">
                    <input type="password"
                    placeholder='Password' required/>
                    <FaLock className='icon' />
                </div>
                <div className="remember">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Lost Password</a>
                </div>
                <button type='submit'>Login</button>
                <div className="signup-link">
                    <p>Don't have any account? <a href="#" onClick={registerLink}>Register</a> </p>
                </div>
            </form>        
        </div>
        <div className="form-box register">
            <form action="">
                <h1>Registeration</h1>
                <div className="input">
                    <input type="text"
                    placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input">
                    <input type="email"
                    placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input">
                    <input type="password"
                    placeholder='Password' required/>
                    <FaLock className='icon' />
                </div>
                <div className="remember">
                    <label><input type="checkbox" /> I agree to the terms & conditions</label>
                </div>
                <button type='submit'>Register</button>
                <div className="signup-link">
                    <p>Already have an account? <a href="#" onClick={loginLink}>Login</a> </p>
                </div>
            </form>        
        </div>
    </div>
  )
}

export default LoginRegister