import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./nav.css";
import axios from "axios";  // Ensure axios is imported for making API requests

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [input, update] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed: ", err.message);
    }
  };
  const onChange = (e) =>{
    
  }
 
  // Updated handleSearch to search for both dogs and cats and navigate to correct detail page
  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      
      try {
        const response = await axios.get(`https://petworld-h7ux.onrender.com/search?name=${searchQuery}`);
        const pets = response.data;
  
        if (pets.length === 1) {
          const pet = pets[0];
          if (pet.category === "dog") {
            navigate(`/dog-detailspage/${pet.id}`); 
            e.preventDefault() // Redirect to dog detail page
          } else if (pet.category === "cat") {
            navigate(`/cat-detailspage/${pet.id}`); 
            e.preventDefault() // Redirect to cat detail page
          }
        } else {
          alert("No or multiple pets found with that name.");
        }
      } catch (error) {
        console.error("Error searching for pets:", error);
        alert("Error searching for pets. Please try again.");
      }
    }
  };
  

  return (
    <div className="nav-position">
      <div className="nav1">
        <Link to='/'><img
          src={"images/logo.png"}
          height="80"
          width="80"
          className="image-logo"
          alt="Logo"
        /></Link>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search pets... and enter"
            className="input"
            value={searchQuery}
            onChange={(e) =>  setSearchQuery(e.target.value)}
            onKeyPress={handleSearch} 
             // Trigger search on Enter key press
          />
          
        </div>
      </div>

      <div>
        <ul className="list-items">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dogs" className="link">
              Dogs
            </Link>
          </li>
          <li>
            <Link to="/cats" className="link">
              Cats
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              Cart
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="link logout-button">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
