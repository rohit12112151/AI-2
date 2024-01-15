import React from 'react'
import './Forgetpassword.css'
import axios from 'axios';
import { useState } from 'react';

function Forgetpassword() {
  const [email,setEmail]=useState();
  const [error,setError]=useState();
  const handleChange=(e)=>{
    setEmail({email:e.target.value});
  }
  const handleClick=async(e)=>{
  try{
    await axios.post('http://localhost:5000/forgetpassword',email).catch((err)=>{console.log("error")}).then((response)=>{
      console.log(response.data.type);
      if(response.data.type==='noEmail')return setError("pls enter your email");
    });
     
  }
  catch(err){

    console.log("error in posting");

  
  }
    // console.log(fog);
  }
  return (
    
    <div className="fog">
      <header className="fog-header">
          <div className="fog_main">


            <div className="fog-logo_main">
              <img className="fog-logo" src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png" alt='logo'/>
            </div>
            {
              error && <p style={{color:"red"}}>{error}</p>
            }

            <div className="fog-data_main">
              <input type="email" name='email' placeholder="enter your email" className="email" onChange={handleChange}/>
              <button className="fog-btn fog-icon" onClick={handleClick}>Send link</button>
            </div>
            
          </div>
      </header>
    </div>
  )
  
}

export default Forgetpassword


