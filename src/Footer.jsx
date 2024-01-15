import React, { useContext } from 'react'
import './Footer.css'
import {SocialIcon} from 'react-social-icons'
import Usercontext from './Context/Usercontext'

function Footer() {
  const {mode}=useContext(Usercontext)
  return (
    <div className={mode?"my-footer dark":"my-footer light"}>
    <div className='footer-logo'>
        <div className='foo-logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PlayStation_App_Icon.jpg/640px-PlayStation_App_Icon.jpg'/>
        </div>
        <h2>My Logo</h2>
    </div>
    <div className='footer-connect'>
        <h2>Follow Us</h2>
        <div className='connect-links'>
                 <SocialIcon url="https://twitter.com" className='icon'/>
                  <SocialIcon url="https://facebook.com" className='icon'/>
                  <SocialIcon url="https://google.com" className='icon'/>
                  <SocialIcon url='https://linkedin.com' className='icon'/>
        </div>
    </div>
    <div className='footer-link'>
        <h2>About Me</h2>
        <p>write here</p>
        <SocialIcon url='https://github.com' className='icon'/>
    </div>
      
    </div>
  )
}

export default Footer
