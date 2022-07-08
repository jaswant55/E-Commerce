import React,{useState} from 'react'
import { Navbar,
      NavItem,
       NavLink,
       Nav, 
       NavbarBrand, 
       NavbarToggler, 
       Collapse,
        Container,
        Row, 
        Col,
        InputGroup,
        Input,
        Form,
        InputGroupAddon,
        Button,
        
        
     } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavbarText } from 'reactstrap';
import { FaSistrix,FaUserAlt, FaShoppingCart} from "react-icons/fa";
import { Icons } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Popover, OverlayTrigger, Dropdown, Badge } from 'react-bootstrap';
import ShoppingCart from './ShoppingCart'
import { toast } from 'react-toastify';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Cart from '../cart/Cart';


import { Card,CardImg, CardBody,CardTitle,CardText} from 'reactstrap';
import { useSelector } from 'react-redux';

const Header = (props) => {

   const getdata= useSelector((state)=>state.cartreducer.carts);
   console.log(getdata);
     let Navigate = useNavigate();
     const change=()=>{
         return Navigate('/userAccount')
     }
     
     const cartChange= ()=>{
       return Navigate('/Cart')
     }
console.log("Header PRops",props)
     
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `/userAccount`; 
    //   navigate(path);
    // }
   return(
     <>    <Container id='menuHeader' fluid >
    
    <Row className='Row'>
    
      <Col  md={4}  xs={12}>
     
     
      <Navbar bg="primary" variant="dark" navbar>
    <Container>
    
    {/* <NavbarToggler onClick={toggle}/> */}
      {/* <Collapse navbar isOpen={isOpen}> */}
    <Nav className="me-auto mt-3">
      <NavLink tag={Link} to='/'><h6>Home</h6></NavLink>
      <NavLink tag={Link} to='/blog'><h6>Blog</h6></NavLink>
      <NavLink  tag={Link} to='/shop'><h6>Shop</h6></NavLink>
      <NavLink tag={Link} to='/contact'><h6>Contact</h6></NavLink>
    </Nav>
    {/* </Collapse> */}
    </Container>
  </Navbar>
  
      </Col>
      
      <Col  md={4} xs={6}>
      <Navbar bg="primary" variant="dark">
    <Container className='justify-content-center'>
    
    <Nav className="me-auto">
        <NavbarBrand>
          <Link to='/' tag={Link}>
           <h4>B O T I G O</h4> 
          </Link>
        </NavbarBrand>
    </Nav>
    </Container>
  </Navbar>
      </Col>
      <Col  md={4}  xs={6}>
      <Navbar bg="primary" variant="dark">
    <Container className='justify-content-end pe-auto'>
    <Row className='mt-3'>
    <Col>
     <FaSistrix onClick={props.toggle}
           />
           
    
    </Col>
    <Col><FaUserAlt onClick={change} /></Col>  
    <Col> 
      <Nav>
        <Dropdown>
          <DropdownToggle>
              <FaShoppingCart />
              <Badge>{getdata.length}</Badge>
          </DropdownToggle>
          <DropdownMenu style={{ minWidth: 370}}>
             {/* {
              getdata.length ?
              
             } */}
          </DropdownMenu>
        </Dropdown>
      </Nav>    
    </Col>
    </Row>
    </Container>
  </Navbar>  
      </Col>
    </Row>
    {/* </Collapse> */}
  </Container>
  </>

   
   )
  
}

export default Header;