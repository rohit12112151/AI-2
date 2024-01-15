import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import {Navigate} from 'react-router-dom';

function Register() {
  const [regdata,setRegdata]=useState({});
  const [validpass,setValidpass]=useState();
  const [password,setPassword]=useState();
  const [login,setLogin]=useState();
  const [confpassword,setConfpassword]=useState();
  const [error,setError]=useState();
  const handleChange=(e)=>{
    setError();
    setValidpass();
    const {name,value}=e.target;
    if(name==='password')setPassword(value);
    if(name==='confirm_password')setConfpassword(value);
    setRegdata({...regdata,[name]:value});
  }
  const handleClick=async(e)=>{
    if(password!==confpassword)setError("password and confirm password is not same!")
    else {
  try{
    await axios.post('http://localhost:5000/register',regdata).catch((err)=>{console.log("error")}).then((response)=>{
      console.log(response.data.type);
      if(response.data.type==='noEmail' || response.data.type==='email')return setError("Pls enter your email");
      if(response.data.type==='user exist')return setError("User is already registered");
      if(response.data.type==='strongPassword')return (setError("Pls enter strong password"),setValidpass(response.data),console.log(validpass));
      setLogin('yes');
    });
     
  }
  catch(err){

    console.log("error in posting");

  }
  }
    // console.log(reg);
  }
  return (
    
    <div className="reg">
    {login && <Navigate to="/" />}
      <header className="reg-header">
          <div className="reg_main">


            <div className="logo_main">
              <img className="logo" src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png" alt='logo'/>
            </div>
            {
              error && <p style={{color:"red"}}>{error}</p>
            }

            <div className="data_main">
               <input type="text" name='user_name' className='user_name' placeholder='enter your name' onChange={handleChange}/>
              <input type="email" name='email' placeholder="enter your email" className="email" onChange={handleChange}/>
              <input type="password" name='password' placeholder="enter your password" className="password" onChange={handleChange}/>
              <input type="password" name='confirm_password' placeholder="confirm your password" className="password" onChange={handleChange}/>
              <button className="btn icon" onClick={handleClick}>create account</button>
            </div>
            
          </div>
          <div className='password_box'>
                {
                  validpass && <ul>
                    <li>minimum length should be {validpass.strong_pass.minLength}</li>
                    <li>minimum lower case should be {validpass.strong_pass.minLowercase}</li>
                    <li>minimum upper case should be {validpass.strong_pass.minUppercase}</li>
                    <li>minimum number should be {validpass.strong_pass.minNumbers}</li>
                    <li>minimum symbol should be {validpass.strong_pass.minSymbols}</li>
                  </ul>
                }
            </div>
      </header>
    </div>
  )
  
}

export default Register
