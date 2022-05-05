import React from 'react'
import {Container, Card, CardBody,Row, Col, Button, CardImg, CardTitle, CardText} from 'reactstrap'
import Image from "react-bootstrap/Image";
import '../../index.css';

const Home = () => {
  return (
    <>
        <Container fluid className='fluid-2' >
    <div className="Abs">
    <div className='get'>
       <h1>Headline that grabs</h1>
       <h1>people’s attention</h1>
       <br/>
      <Button>Shop Now</Button>
    </div>
    <Image fluid
        src='./Heroc.webp'
        alt='..'
        />
    </div>
      
      
          </Container>
          <Container fluid className='justify-content-center  d-flex align-items-center mt-3'>
              <div className='row'>
              <div className="col-12">
                    <h2 className='d-flex justify-content-center'>Featured Collection</h2>
              </div>
              <br/>
            <div className="col-12 justify-content-center d-flex">            
                <p>
                A powerful headline about your product’s features
                 to give focus to your chosen product collection
                </p>
            </div>
              </div>


        </Container>
        <Container className='fluid-3'>
          <Row>
            <Col md={4} sm="{6}" xs={12} className='btn'>
            <Card style={{ width: '20rem'}} className='border-0'>
                <CardImg variant="top" height='425px' className='fluid' src="./image/Pearlville.jpg" />
                  <CardBody>
                   <CardTitle>Eternal Sunset Collection Lip and </CardTitle>
                    <CardText>
                       13.00$ 
                    </CardText>
                    
                    <Button variant="dark" className='btn1'>ADD to Cart</Button>
                  </CardBody>
            </Card>
            </Col>
            <Col md={4} sm="{6}" xs={12} className='btn' >
            <Card style={{ width: '20rem' }}className='border-0' >
                <CardImg variant="top" height='425px' className='fluid' src="./image/Glamifiedviola.jpg" />
                  <CardBody>
                   <CardTitle>Vinopure Pore Purifying Gel Cleanser</CardTitle>
                    <CardText>
                       12.00$   


                    </CardText>
                    
                    <Button variant="dark">ADD to Cart</Button>
                  </CardBody>
            </Card>
            </Col>
            <Col md={4} sm="{6}" xs={12} className='btn' >
            <Card style={{ width: '20rem' }} className='border-0'>
                <CardImg variant="top" height='425px' className='fluid' src='./image/Glamifiedpeach.jpg' />
                  <CardBody>
                   <CardTitle>Deep Sweep 2% BHA Pore Cleaning </CardTitle>
                    <CardText>
                       15.50$
                    </CardText>
                    
                    <Button variant="dark">ADD to Cart</Button>
                  </CardBody>
            </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid className='fluid-2'>
               
                 <div className='cone'>
                 <div className='done'>
                   <h2 className='justify-content-center d-flex'>Highlighted Section</h2><br/>
                   <p className='justify-content-center'>What differentiates you from the competition? Use this section to talk about it. Don’t forget to talk about the benefits.
                    </p>
                    <Button >SHOP NOW</Button>
                 </div>
                 
                   <Image src='./image/hbg.webp' className='w-100 fluid'/>
                   
                 </div>
               
        </Container>
        <Container fluid className='feature justify-content-center  d-flex align-items-center mt-3'>
              <div className='row'>
              <div className="col-12">
                    <h2 className='d-flex justify-content-center'>Featured Categories</h2>
              </div>
              <br/>
            <div className="col-12 justify-content-center d-flex">            
                <p>
                Give your customers insight into your product collection. Select imagery and name that relates to the product category.
                </p>
            </div>
              </div>
               
        </Container>
        <Container className='feature-item'>
        <div>
              <Row>
                
                <Col md={3} className='btn' >
                   <Card style={{ width: '15rem' }} className='border-0'>
                <CardImg variant="top" src='./image/Rectangle.jpg' className='fluid' />
                  <CardBody>
                   <CardTitle>Makeup</CardTitle>
                  </CardBody>
            </Card>
            </Col>
            <Col md={3} className='btn'>
                   <Card style={{ width: '15rem' }} className='border-0'>
                <CardImg variant="top" src='./image/Rectangle1.jpg' className='fluid' />
                  <CardBody>
                   <CardTitle>Lipstick</CardTitle>
                  </CardBody>
            </Card>
            </Col>
            <Col md={3} className='btn'>
                   <Card style={{ width: '15rem' }} className='border-0'>
                <CardImg variant="top" src='./image/Rectangle2.jpg' className='fluid' />
                  <CardBody>
                   <CardTitle>Bath Products</CardTitle>
                  </CardBody>
            </Card>
            </Col>
            <Col md={3} className='btn'>
                   <Card style={{ width: '15rem' }} className='border-0'>
                <CardImg variant="top" src='./image/Rectangle3.jpg' className='fluid'/>
                  <CardBody>
                   <CardTitle>Treatments</CardTitle>
                  </CardBody>
            </Card>
            </Col>
                





              </Row>
              </div>

        </Container>
          </>


  )
}

export default Home