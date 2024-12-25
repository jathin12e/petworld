import React from 'react';
import { useCart } from './CartContext';



const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <div style={{fontSize:"20px"}}>
      <center style={{textDecoration:"underline"}}>Cart Page</center >
      {cartItems.length === 0 ? (
        <center>No items in the cart</center>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cartItems.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
              <img
                src={`http://localhost:8080/images/${item.image}`}
                alt={item.name}
                style={{ width: '100px', height: '100px', marginRight: '10px' }}
              />
              <div style={{ flexGrow: 1 }}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item)}
                style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
