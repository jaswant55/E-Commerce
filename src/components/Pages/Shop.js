import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Container, Nav,Row, Col, Dropdown, Button} from 'reactstrap'
import { Card } from 'reactstrap';
import { CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';


const Shop = ({product}) => {
 
  const dispatch= useDispatch();
 

  const send=(e)=>{
    console.log(e);
    dispatch(ADD(e))
  }

  
  return (
     
  
      <>
     <Container>
     <div className='justify-content-center d-flex'>
           <h1>Shop</h1>
         </div>
       <div className=' justify-content-center d-flex'>
         
         <p>
         State the biggest use case of your product. Briefly expand on how this will help your customers.
         </p>
       </div>
       <div >
       <Row>
         <Col md={6}>
           <div>Showing all 8 results</div>
         </Col>
         <Col md={6}>
         <div className='justify-content-end d-flex border-dark'> 
         <select>         
             <option>
               Default Sorting
             </option>
             <option>
               sort by ppopularity
             </option>
             <option>
               Sort by average rating
             </option>
             <option>
               Sort by latest
             </option>
             <option>
               Sort by price: Low or high
             </option>
             <option>
               Sort by price: High to low
             </option>
           </select>
           </div>

         </Col>
       </Row>
       <hr/>
       </div>

       <div>
         <Container>
           <Row>
             {product.map((data,id)=>{
               return(
                 <Col>
                 <Card style={{ width: '18rem'}} className='display-none'>
                   {
                     
                     data.images.map((item, id)=>{
                       
                       if(!id)
                       {
                        
                       return(
                         <CardImg height='400px' src={item.src}/>
                       )
                       }
                       
                     })
                   }
                  <CardBody>
                   <CardTitle>{data.name}</CardTitle>
                   <CardText>
                     {data.price}$
                    </CardText>
                    <Button variant="dark"  onClick={()=> send(data)}>ADD TO CART</Button>
                  </CardBody>
                 </Card>
                 </Col>
               )
             })}
           </Row>
         </Container>
       </div>
      
     </Container>

      </>
        
      
    
  )
}

export default Shop