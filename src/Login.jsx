import React, { useContext, useState } from 'react'
import './Login.css'
import {SocialIcon} from 'react-social-icons'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Usercontext from './Context/Usercontext';
// import Header from './Header';

function Login() {
  const [data,setData]=useState({});
  const [error,setError]=useState();
  // const [user,setUser]=useState();
  // const [token,setToken]=useState();
  const {user,token,tokenDispatch,userDispatch}=useContext(Usercontext);
  const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
     setData({...data,[name]:value});
  }
  const handleClick=async(e)=>{
    e.preventDefault();
    //kaam krna h
    await axios.post('http://localhost:5000/login',data).then((resp)=>{
      console.log(resp.data.message)
      if(resp.data.message==="user not found")setError("user not found");
      else if(resp.data.message==="enter correct password")setError("enter correct password");
      else {
        // setUser(resp.data.founduser);
        // setToken(resp.data.token);
        tokenDispatch({type:"SET_TOKEN",payload:resp.data.token});
        userDispatch({type:"SET_USER",payload:resp.data.founduser});
        console.log(token)
        console.log(user)
        localStorage.setItem("auth_token",JSON.stringify(resp.data.token));

      }

      //console.log(resp);
    }).catch((err)=>console.log("error in login"));

  }
  return (
    <div className="App">
    {
      token && <Navigate to="/"/>
    }
    
     
      <header className="App-header">
          <div className="login_main">


            <div className="logo_main">
              <img className="logo" alt='logo' src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png"/>
            </div>
            <div>
            {
              error && <p style={{color:"red"}}>{error}</p>
            }
            </div>

           
            <div className="data_main">
               <div className='social-login'>
                  <SocialIcon url="https://twitter.com" className='icon'/>
                  <SocialIcon url="https://facebook.com" className='icon'/>
                  <SocialIcon url="https://google.com" className='icon'/>
               </div>
              <input 
                 type="email" 
                 name='email' 
                 placeholder="enter your email" 
                 className="email" 
                 onChange={handleChange}/>
              <input 
                  type="password" 
                  name='password' 
                  placeholder="enter your password" 
                  className="password" 
                  onChange={handleChange}/>
              <button className="btn icon" onClick={handleClick}>login</button>
              <span>Don't have account?</span><a href="/register">sign up</a>
              <a href="/Forgetpassword">forgot password</a>
            </div>

            
          </div>

          
      </header>
    </div>
  )
}

export default Login
