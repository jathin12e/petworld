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
import Detail2 from './components/cat-detailspage';
import Register from "./register";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; 
import axios from "axios";
import Order from './components/order'

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
 

  useEffect(() => {
    // Firebase auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    // Redirect to register if not logged in
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

  useEffect(() => {
    // Fetch dogs data
    axios.get("https://petworld-h7ux.onrender.com/dogs/")
      .then((res) => setDogs(res.data))
      .catch((error) => console.error('Error fetching dogs', error));
  }, []);

  useEffect(() => {
    // Fetch cats data
    axios.get("https://petworld-h7ux.onrender.com/cats/")
      .then((res) => setCats(res.data))
      .catch((error) => console.error('Error fetching cats', error));
  }, []);
  

  return (
    <CartProvider>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='petworld-1.onrender.com/dogs' element={<Dogsection data={dogs} />} />
          <Route path='/cats' element={<Catsection data={cats} />} />
          <Route path='/cart/' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dogs/dog-detailspage/:id' element={<Detail1 data={dogs} />} />
          <Route path='/cats/cat-detailspage/:id' element={<Detail2 data={cats} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/order/:id' element={<Order />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
