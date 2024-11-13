// src/pages/DogsPage.jsx
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const dog1 = [
  { id: 1, image: "images/download.jpeg", name: "Golden Retriever", price: 10000, des: "The golden retriever is even-tempered, intelligent and affectionate. Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers." },
  { id: 2, image: "images/download (1).jpeg", name: "Bull Dog", price: 10500, des: "Nicknamed the “sourmug,” the Bulldog is a stocky dog that moves with a rolling gait. It has a large head, folded ears, a short muzzle, a protruding lower jaw, and loose skin that forms wrinkles on the head and face." },
  { id: 3, image: "images/download (2).jpeg", name: "German Shepherd", price: 20500 },
  { id: 4, image: "images/download (3).jpeg", name: "Siberian Husky", price: 30500 },
  { id: 5, image: "images/download.webp", name: "Beagle", price: 10500 },
  { id: 6, image: "images/download (1).webp", name: "Chihuahua", price: 10700 },
  { id: 7, image: "images/download (2).webp", name: "Dachshund", price: 21500 },
  { id: 8, image: "images/download (3).webp", name: "Bichon Frise", price: 30500 },
];

const DogsPage = () => {
  const { addToCart } = useCart();
  return (
    <div>
      
      <div className='resize'>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={"images/cat-dog-lying-together-ground-with-ai-generated_144089-662.jpg"} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={"images/images (4).jpeg"} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={"images/images (4).jpeg"} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <center style={{marginTop:"20px", fontSize:"30px" , textDecoration:"underline"}}>Popular Breeds</center>
      
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:"center"}}>
        {dog1.map((u) => (
          <div key={u.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px',cursor:'pointer' }}>
            <Link style={{color:"#000", textDecoration:"none"}} to={`/dog-detailspage/${u.id}`}><img src={u.image} alt={u.name} style={{ width: '300px', height: '300px'  }} />
            <h3>{u.name}</h3>
            <p>Price: {u.price}</p></Link>
            <button onClick={() => {addToCart(u); alert(`${u.name} has been added to the cart!`);}} className='btn btn-outline-primary'>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className='back'>
            <h1>Contact Us</h1>
            <div className='contact-position'>
                <h3>Email : muppalaJathin@gmail.com</h3>
                <h3>Phone No : 7305929739</h3>
            </div> 
            <div className='align'>
              <input type='text' placeholder='ask queastion' className='input2'/> 
              <button className='input2'>post</button>
            </div>
      </div>
    </div>
    
  );
};

export default DogsPage;
