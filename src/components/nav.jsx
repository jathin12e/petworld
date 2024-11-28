import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { rtdb } from "../firebase";
import { ref, get } from "firebase/database";
import "./nav.css";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  const handleSearch = async () => {
    try {
      const dogRef = ref(rtdb, "dogs/dogindex"); // Adjust this for cats or combine if needed
      const snapshot = await get(dogRef);

      if (snapshot.exists()) {
        const pets = Object.values(snapshot.val()).map((pet) => ({
          ...pet,
          category: pet.id >= 9 ? "cat" : "dog", // Assuming IDs 9+ are cats
        }));
        const filteredResults = pets.filter((pet) =>
          pet.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching search data: ", error);
    }
  };

  const renderSearchResults = () => (
    <div className="search-results">
      {searchResults.map((result, index) => (
        <Link
          to={`/${result.category}-detailspage/${result.id}`}
          key={index}
          className="search-result-item"
        >
          <img src={result.image} alt={result.name} width={50} height={50} />
          <div>
            <p>
              <strong>{result.name}</strong>
            </p>
            <p>Price: ${result.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="nav-position">
      <div className="nav1">
        <img
          src={"images/logo.png"}
          height="80"
          width="80"
          className="image-logo"
          alt="Logo"
        />

        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search pets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input"
          />
          <button onClick={handleSearch} type="submit" className="search-logo">
            <i className="fa fa-search"></i>
          </button>
          {searchQuery && renderSearchResults()}
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
          <li>
            <Link to="/search" className="link">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
