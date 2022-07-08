import React, { useEffect, useState } from 'react'
import {Form,
Input,
InputGroup,
InputGroupAddon,
FormGroup,Button, Collapse, NavItem} from 'reactstrap';
import {FaSistrix} from 'react-icons/fa'
import axios from 'axios';
import Myproducts from './Myproducts';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';


const SearchForm = (props) => {
  const [query, setQuery] = useState("");
  

  const [products, setProducts] = useState([]);
  
  
  async function fetchProducts(){
       axios.get('http://localhost/woocom/wp-json/public-woo/v1/products?search=' + query)
 .then(function (response) {
    // handle success
    console.log('moongfali',response.data)

    setProducts(response.data);
    console.log('products', products);
  })
  
      
      

  

    }
  
  const onSubmit=(e)=>{
    e.preventDefault();

    fetchProducts();
};
   
  let res = null;
  if(products.length > 0 ) {
   
      res = <Myproducts  products={products}/>;
      
  } 
  return (
    
    <div>
       <Collapse isOpen={props.isOpen} >
         <Form className='form' onSubmit={onSubmit} >
               
               <FormGroup>
                 <InputGroup className='text'>
                   <Input 
                   type="text"
                   className='txt'
                //    name="todo"
                //    id="todo"
                   placeholder="Search Products"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                   />
                  <InputGroupAddon addonType="prepend" >
                     
                       <Button color="dark"
                       className='taxt'
                      
                       >
                           <FaSistrix/>
                       </Button>
                  </InputGroupAddon>
                     
                                   
                  </InputGroup>
               </FormGroup>
           </Form>
           {res}
           
           </Collapse>
    </div>
  )
}

export default SearchForm;