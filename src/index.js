import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './components/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
     <App />
     </Provider>
 
);





// console.log("Product s props",props.products)
// return(
//   <>
//       {props.products.map((product) => {
//         //[ {images:[]}]
//   return (
//       <Container>
//         <Card>
//           <CardGroup>
//         {
//           product.images.map((data)=>(
//             <img src={data.src}/>
//           ))
//         }