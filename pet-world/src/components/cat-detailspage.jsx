import React, { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import './details.css';
import { useCart } from './CartContext';

const CatDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    // Fetch the cat details based on the ID from the URL
    fetch(`https://petworld-h7ux.onrender.com/pets/${id}`)
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
          src={`https://petworld-h7ux.onrender.com/images/${cat.image}`}
          alt={cat.name}
          className='image-position'
        />
        <div className="position-2">
          <h1 style={{color:"red"}}>{cat.name}</h1>
          <p>Price: ${cat.price}</p>
          <p style={{color:"grey"}}>{cat.DES}</p>
          <button className='btn btn-primary' style={{margin:"10px"}}><a href={cat.video} style={{color:"white"}}>video</a></button>
          <button className="btn btn-outline-primary"><Link to={`/order/${cat.id}`}>Order Now</Link></button>&nbsp;
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
