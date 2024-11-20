import React, { useState, useEffect } from "react";
import Nav from './components/nav';
import Home from './components/home';
import Catsection from './components/catsection';
import Dogsection from './components/dogsection';
import Login from './components/login';
import Cart from './components/cart';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Detail1 from './components/dog-detailspage';
import Detail2 from './components/cat-details';
import Register from "./register";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); 
    });

    
    const interval = setInterval(() => {
      if (!isLoggedIn) {
        navigate("/register");
      }
    }, 15000); 
    return () => {
      unsubscribe(); 
      clearInterval(interval); 
    };
  }, [isLoggedIn, navigate]);

  return (
    <CartProvider>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dogs' element={<Dogsection />} />
          <Route path='/cats' element={<Catsection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path="/dog-detailspage/:id" element={<Detail1 />} />
          <Route path="/cat-details/:id" element={<Detail2 />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
