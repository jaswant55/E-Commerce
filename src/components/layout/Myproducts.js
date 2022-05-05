import React from 'react'
import { Card, CardGroup, Container,Row, Col, CardBody, CardImg, CardTitle,CardText, Button} from 'reactstrap';
import { Image } from 'react-bootstrap';

const Myproducts = (props) => {
  console.log("product as props", props.products)
  return(
    <>
        {props.products.map((product) => {
    return (
        <Container>
          
          <Row>
            <Col md={4}>
                     
              <Card style={{ width: '20rem' }}className='border-0' >
              {product.images.map((data) => {
              return(
              <CardImg height='425px' className='fluid0' src={data.src}/>
                )
                } )}
                
                 
                  <CardBody>
                   <CardTitle>{product.name}</CardTitle>
                    <CardText>
                        {product.price}$   


                    </CardText>
                    
                    <Button variant="dark">ADD to Cart</Button>
                  </CardBody>
              </Card>
            </Col>
            <Col md={4}>
                  


                  

            </Col>
          </Row>
            
        </Container>
    );
})}
</>
);
}

export default Myproducts;
