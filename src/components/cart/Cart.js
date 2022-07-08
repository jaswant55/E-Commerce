import React,{useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';



const Cart = (props) => {
  
    
  return (
    <>
      <Container className='cont'>
      <div className='justify-content-center d-flex'><h1>Cart</h1></div>
      <div className='mt-4 border border-dark ' style={{padding:'12px'}}>
        <Row>
          <Col md={6} >
          <div className='d-flex justify-content-center'>
            Product
          </div>
            
          </Col>
          <Col md={2}>
          <div>Price</div>
           
          </Col>
          <Col md={2}>
           <div>QUANTITY</div>
          </Col>
          <Col md={2}>
           <div>SUBTOTAL</div>
          </Col>
        </Row>
        </div>
        <div className='mt-4' style={{padding:'12px'}}>
        <Row>
        
        <Col md={6}>
        <div className='d-flex justify-content-left'>
        <Image src="./image/Pearlville.jpg" className='cartimg'/>
        
        
            <h6>Eternal Sunset Collection Lip and</h6>
            </div>
        </Col>
        <Col md={2}>
          <div className='price'>
            $12.00
          </div>
        </Col>
        <Col md={2}>
          <div>
            <button>-</button> 

            <count>1</count>
            
            <button>+</button>
          </div>
        </Col>
           <Col md={2}>
              $12.00
           </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}

export default Cart;