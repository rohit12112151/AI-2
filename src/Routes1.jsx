import React, { useState } from 'react'
import Cards from './Cards'
import { Button } from '@mui/material'
import axios from 'axios'

function Routes1() {
  const [topic,setTopic]=useState();
  const handleChange=(e)=>{setTopic(e.target.value)}
  const handleClick=async()=>{
    console.log(topic)
    try {
      await axios.post('http://localhost:5000/generate',{topic}).then(res=>{
      console.log("res.data.message")
    })
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div style={{height:"100vh"}}>
      {/* <Cards/> */}
      <h2>hello</h2>
      <input type='text' onChange={handleChange}/>
      {/* <input type='submit'/> */}
      <Button onClick={handleClick}>submit</Button>
    </div>
  )
}

export default Routes1