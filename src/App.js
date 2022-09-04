// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from "./containers/Header";
import { ProductDetail } from "./containers/ProductDetail";
import { ProductListing } from "./containers/ProductListing";
import { Footer } from './containers/Footer';
import {useState, useEffect} from 'react';
import { Cart } from './containers/Cart';
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    console.log(storedItems);
    if (storedItems) {
     setCart(storedItems);
    }
  }, []);
  // console.log(cart);
  const handleCart = (items) =>  {
    // console.log(items);
    const itemExist = cart.find(item => item.id === items.id);
    console.log(itemExist);
    if(itemExist)
    {
      alert("The product is alredy added in Cart.");
      console.log("item exist");
    }
    else{
      setCart([...cart, items]);
      localStorage.setItem('items', JSON.stringify([...cart, items]));
    }
    
  }

  return (
    <>
    <BrowserRouter>
    <Header cart={cart}/>
    <Routes>
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/product/:productId" element={<ProductDetail handleCart={handleCart} cart={cart} />}/>
      <Route path='/cartlist' element={<Cart cart={cart}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
