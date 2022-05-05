import React from 'react'
import { Container,Row, Col , Nav, NavLink, NavbarText, NavbarBrand, Collapse,NavbarToggler, Navbar} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='fluid-color'>
    <Container fluid className='fluid' id='footer'>
       <div className='jus'>
         <Row >
           <Col md={6}>
              <div>
                <h3>BOTIGA</h3>
                <p>Give your customers insight into your product Collection</p>
              </div>

           </Col>
           <Col md={3}>
              <Nav  className="flex-column">
                <NavbarText>
                <h4>Quick Links</h4>
                </NavbarText>
                  <NavLink tag={Link} to='/'>Home</NavLink>
                <NavLink tag={Link} to='/blog'>Blog</NavLink>
                <NavLink tag={Link} to='Shop'>
                  Shop
                </NavLink>
              </Nav>
           </Col>
           <Col md={3}>
           <Nav  className="flex-column">
                
                  <NavbarText><h4>About</h4></NavbarText>
                
                <NavLink tag={Link} to='/'>Home</NavLink>
                <NavLink tag={Link} to='/blog'>Blog</NavLink>
                <NavLink tag={Link} to='/shop'>
                  Shop
                </NavLink>
              </Nav>

           </Col>
         </Row>
       </div>      
           
    </Container>
    <Container id='footer'>
      <div>
        <Container className='border-top'>
          <Row className='fluid-row'>
            <Col md={6}>
              <Row className='sand'>
                <div><FaInstagram/></div>
                <div><FaFacebook/></div>
                <div><FaTwitter/></div>

              </Row>
            </Col>
            <Col md={6} xs={12}>
                <div className='end'>
                <NavbarText>© 2022 Botiga. Proudly powered by
                <Link to='/' tag={Link}> BOTIGA</Link></NavbarText>
                
                
                 
                </div>
            </Col>
          </Row>
            
          
        </Container>
      </div>
    </Container>
    </div>
    </>
  )
}

export default Footer;