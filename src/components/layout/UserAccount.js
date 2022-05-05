import React, { useState } from 'react'
import { Container, Form, FormGroup, Button, Collapse } from 'reactstrap';
import { FormControl, FormLabel, FormText, FormCheck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
const UserAccount = () => {
   
  return (
    <>
    
        <Container>
            <div className='justify-content-center d-flex'>
                <h1> My Account</h1>
            </div>
            <div>
                <h3>Login</h3>
            </div>
            <Form >
              <FormGroup className="mb-3" >
               <FormLabel>Username or email address *</FormLabel>
                <FormControl type="email" placeholder="Enter email" />
                 
              </FormGroup>

              <FormGroup className="mb-3" controlId="formBasicPassword">
                <FormLabel>Password *</FormLabel>
               <FormControl type="password" placeholder="Password" />
                 </FormGroup>
                <FormGroup className="mb-3">
                 <FormCheck type="checkbox" label="Check me out" />
                  </FormGroup>
                 <Button >
                   Submit
                    </Button>
            </Form>
        </Container>
        
        
    </>
  )
}

export default UserAccount;