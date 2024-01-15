import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from "@mui/material/Dialog"
import Mydialog from './Mydialog';

import React, { useState } from 'react'




function Cards() {
  const [open,setOpen]=useState(false);
  const handleDialog=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false)
  }
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://gepard.io/uploads/product-images-for-ecommerce-websites.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleDialog}>Add to cart</Button>
      </Card.Body>
    </Card>
    <Dialog open={open} fullWidth="true" maxWidth="lg">
      <Mydialog/>
      {/* <h4>hlo</h4> */}
    </Dialog>
    </>
  );
}

export default Cards;