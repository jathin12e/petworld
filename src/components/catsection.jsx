// src/pages/DogsPage.jsx
import React from 'react';
import { useCart } from './CartContext';
import './dogsection.css'
import { Link } from 'react-router-dom';



const cats = [
    {
      id:1,
      image:"images/download (4).jpeg",
      name:"british shorthair",
      price:10000
    },
    {
      id:2,
      image:"images/download (5).jpeg",
      name:"Persian",
      price:10500
    },
    {
      id:3,
      image:"images/download (6).jpeg",
      name:"saimese",
      price:20500
    },
    {
      id:4,
      image:"images/download (7).jpeg",
      name:"bomay cat",
      price:30500
    },
  {
    id:5,
    image:"images/download (5).webp",
    name:"Sphynx cat",
    price:10500
  },
  {
    id:6,
    image:"images/download (6).webp",
    name:"Chartrex",
    price:10600
  },
  {
    id:7,
    image:"images/download (7).webp",
    name:"balinese cat",
    price:20700
  },
  {
    id:8,
    image:"images/download (8).webp",
    name:"American Bobtail",
    price:30900
  }
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
              <img src={"images/images (1).jpeg"} class="d-block w-100" alt="..."/>
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
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:"center" }}>
        {cats.map((cat) => (
          <div key={cat.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
            <Link style={{color:"#000", textDecoration:"none"}} to={`/cat-detailspage/${cat.id}`}><img src={cat.image} alt={cat.name} style={{ width: '300px', height: '300px' }} />
            <h3>{cat.name}</h3>
            <p>Price: ${cat.price}</p></Link>
            <button onClick={() => {addToCart(cat); alert(`${cat.name} has been added to the cart!`);}} className='btn btn-outline-primary'>Add to Cart</button>
            
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
