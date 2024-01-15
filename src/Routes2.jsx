import React, { useContext, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import './AI_css.css'
import Usercontext from './Context/Usercontext';

function Routes2() {
  const [topic,setTopic]=useState();
  const [isGenerating, setIsGenerating] = useState(false)
  const [apiOutput, setApiOutput] = useState('')
  const {mode}=useContext(Usercontext);
  const handleChange=(e)=>{setTopic(e.target.value)}
  const handleClick=async()=>{
    setIsGenerating(true);
    console.log(topic)

    try {
      await axios.post('http://localhost:5000/routes2',{topic}).then(res=>{
        setApiOutput(`${res.data.message}`);
        setIsGenerating(false);
      console.log(res.data.message)
    })
    } catch (error) {
      console.log("error");
    }
  }
  return (
    // <div style={{height:"100vh", color:"black"}}>
    //   <h2>hello</h2>
    //   <input type='text' onChange={handleChange}/>
    //   {/* <input type='submit'/> */}
    //   <Button onClick={handleClick}>submit</Button>
    // </div>

    <div className={"root"+`${mode}`}>
      {/* <Head> */}
        <title>DeepWrite AI</title>
      {/* </Head> */}
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>fantastic blog generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>input the title of your blog below, we'll generate the rest !</h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" value={topic} onChange={handleChange} />
            {/* New code I added here */}
          <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={handleClick}
          >
            <div className="generate">
            {isGenerating ? <span className="loader"></span> : <Button>Generate</Button>}
            </div>
          </a>
        </div>
          {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                  <h3>Output</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
        )}
        
        </div>
      </div>
      
    </div>
  )
}

export default Routes2
