import react,{useEffect, useState}from "react";
import { Navbar } from "reactstrap";
import axios from 'axios';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css"

import Head from "./components/layout/Head";
import { Outlet } from "react-router-dom";
import SearchForm from "./components/layout/SearchForm";
import UserAccount from "./components/layout/UserAccount";
import { toast } from "react-toastify";
import Cart from "./components/cart/Cart";






const App=()=>{
    const [isOpen, setIsOpen]= useState(false);
    const toggle= ()=>(setIsOpen(!isOpen));
    
  const [product,setProducts]= useState([])
  const[cartProducts,setCartProducts] =useState([]);
  const fetchDetails= async()=>{
      axios.get('http://localhost/woocom/wp-json/public-woo/v1/products?per_page=8&page=1')
     .then((response)=>{
      setProducts(response.data);
      console.log("PRODUCT", product);
      console.log(response.data)
     
     })
    }


    
     useEffect(()=>{
       fetchDetails()
     },[])
     

    

     function addToCart(item){
         let isPResent= cartProducts.findIndex((data)=>data.id==item.id);

         if(isPResent ==-1){
             item['qty'] = 1;
            setCartProducts([...cartProducts,item]);
         }  else {
         let data=  cartProducts.map((data)=>{
               if(data.id ==item.id) {
                   data['qty']++;
                   
               }
           })
           setCartProducts(data)

         }
      
     }

    

   
    return(
        <>
        <Router>
       
        <Head/>
        <Header toggle={toggle} cartProducts={cartProducts}/>
        <SearchForm isOpen={isOpen} />
        
         {/* <UserAccount path='/userAccount'/> */}
        
        {/* <Home/> */}
        
        
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route  path="/blog" element={<Blog/>}/>
                <Route  path="/shop" element={<Shop product={product} addToCart={addToCart} />}/>
                <Route  path="/contact" element={<Contact/>}/>
                <Route  path='/userAccount' element={<UserAccount/>}/>
                <Route path="/cart" element={<Cart cartProducts={cartProducts}/>}/>
                
                </Routes>
                {/* <Feature/> */}
                <Outlet/>
                <Footer/>
        </Router>
        </>
    )
}


export default App;
