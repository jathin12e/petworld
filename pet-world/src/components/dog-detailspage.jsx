import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import './details.css';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [dog, setDog] = useState(null);

  useEffect(() => {
    // Fetch the dog details based on the ID from the URL
    fetch(`http://192.168.0.107:8080/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setDog(data))
      .catch((error) => console.error('Error fetching dog:', error));
  }, [id]);

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div className="position">
      <div className="position-1">
        <img
          src={`http://192.168.0.107:8080/images/${dog.image}`}
          alt={dog.name}
          width="400"
        />
        <div className="position-2">
          <h1>{dog.name}</h1>
          <p>Price: ${dog.price}</p>
          <p>{dog.DES}</p>
          <button className="btn btn-outline-primary">Order Now</button>&nbsp;
          <button
            onClick={() => {
              addToCart(dog);
              alert(`${dog.name} has been added to the cart!`);
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

export default ProductDetailsPage;
