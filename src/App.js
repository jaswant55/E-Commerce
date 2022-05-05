import react,{useState}from "react";
import { Navbar } from "reactstrap";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog/Blog";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Head from "./components/layout/Head";
import { Outlet } from "react-router-dom";
import SearchForm from "./components/layout/SearchForm";
import UserAccount from "./components/layout/UserAccount";
import Myproducts from "./components/layout/Myproducts";




const App=()=>{
    const [isOpen, setIsOpen]= useState(false);
    const toggle= ()=>(setIsOpen(!isOpen));

    

    
    return(
        <>
        <Router>
        <Head/>
        <Header toggle={toggle}/>
        <SearchForm isOpen={isOpen} />
        
         {/* <UserAccount path='/userAccount'/> */}
        
        {/* <Home/> */}
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route  path="/blog" element={<Blog/>}/>
                <Route  path="/shop" element={<Shop/>}/>
                <Route  path="/contact" element={<Contact/>}/>
                <Route  path='/userAccount' element={<UserAccount/>}/>
                
                </Routes>
                {/* <Feature/> */}
                <Outlet/>
                <Footer/>
        </Router>
        </>
    )
}


export default App;
