import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import your Firebase auth instance
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set true if user exists, otherwise false
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate('/login'); // Redirect to Login page
    } catch (err) {
      console.error('Logout failed: ', err.message);
    }
  };

  return (
    <div className='nav-position'>
      <div className='nav1'>
        <img src={'images/logo.png'} height="80" width="80" className='image-logo' alt="Logo" />
        <input type="text" placeholder="Search.." className='input' />
        <button type="submit" className='search-logo'>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div>
        <ul className='list-items'>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/dogs' className='link'>Dogs</Link></li>
          <li><Link to='/cats' className='link'>Cats</Link></li>
          <li><Link to='/cart' className='link'>Cart</Link></li>
          {isLoggedIn ? (
            <li><button onClick={handleLogout} className='link logout-button'>Logout</button></li>
          ) : (
            <li><Link to='/login' className='link'>Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
