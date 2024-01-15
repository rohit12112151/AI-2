import React, { useContext } from 'react'
import './Header.css'
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink} from 'react-router-dom'
import Usercontext from './Context/Usercontext';



function Header() {
  const {user,token,tokenDispatch,userDispatch,mode,modeDispatch}=useContext(Usercontext);
  const handleClick=()=>{
    tokenDispatch({type:"UNSET_USER"});
    window.location.href="/login"
}
  return (
    <div>
      <div className= {mode?"header-box dark":"header-box light"}>
        <div className='header-logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PlayStation_App_Icon.jpg/640px-PlayStation_App_Icon.jpg'/>
        </div>
        <div className='app-name'>My App</div>
        <div className='routes'>
        <nav>
            <ul>
                <li><NavLink to="/">routes1</NavLink></li>
                <li><NavLink to="/routes2">routes2</NavLink></li>
                <li><NavLink to="/routes3">routes3</NavLink></li>
                <li><NavLink to="/routes4">routes4</NavLink></li>
            </ul>
          </nav>  
        </div>
        <div className='logout'>
                <button onClick={()=>modeDispatch()}>B</button>
              <button onClick={handleClick}>
                  <LogoutIcon/>
              </button>
        </div>
        
      </div>
    </div>
  )
}

export default Header
