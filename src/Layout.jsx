import React, { useContext } from 'react'
import Header from './Header'
import Footer from "./Footer";
import { Outlet } from 'react-router-dom'
import Usercontext from './Context/Usercontext'
import Routes1 from './Routes1';

function Layout() {
  const {mode}=useContext(Usercontext)
  return (
    <div className={mode?"dark":"light"}>
      <Header/>
      <Outlet/>
      {/* <Routes1/> */}
      <Footer/>
    </div>
  )
}

export default Layout
