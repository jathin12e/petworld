import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './details.css';
import { useCart } from './CartContext';

const CatDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    // Fetch the cat details based on the ID from the URL
    fetch(`https://petworld-2bwh.onrender.com/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setCat(data))
      .catch((error) => console.error('Error fetching cat:', error));
  }, [id]);

  if (!cat) {
    return <div></div>;
  }

  return (
    <div className="position">
      <div className="position-1">
        <img
          src={`https://petworld-2bwh.onrender.com/images/${cat.image}`}
          alt={cat.name}
          width="500"
        />
        <div className="position-2">
          <h1>{cat.name}</h1>
          <p>Price: ${cat.price}</p>
          <p>{cat.DES}</p>
          <button className="btn btn-outline-primary">Order Now</button>&nbsp;
          <button
            onClick={() => {
              addToCart(cat);
              alert(`${cat.name} has been added to the cart!`);
            }}
            className="btn btn-outline-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatDetailsPage;
