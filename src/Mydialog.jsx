import React from 'react'
import "./Mydialog.css"
import { Grid } from '@mui/material'

function Mydialog() {
  return (
    <div className='main-dialog'>
    {/* // <div className='mydialog-img'>
    // <img className='_img' src='https://ecommercephotographyindia.com/info/wp-content/uploads/2022/01/Ecommerce-product-photography-watch-photography-682x1024.jpg'/>
    // </div>
    
    // <div className='mydialog-content'>content</div> */}

    <Grid container spacing={2}>
        <Grid xs={6} md={4}>
        <img className='_img' src='https://ecommercephotographyindia.com/info/wp-content/uploads/2022/01/Ecommerce-product-photography-watch-photography-682x1024.jpg'/>
        </Grid>
        <Grid xs={6} md={8}>
          <h4>xs=6 md=4</h4>
        </Grid>
      </Grid>
      
     </div>
   
  )
}

export default Mydialog


