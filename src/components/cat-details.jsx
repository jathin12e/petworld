// src/ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './details.css'
import { useCart } from './CartContext';

const cats = [
    { id: 1, image: "/images/download (4).jpeg", name: "British Shorthair", price: 10000, des:"Friendly and chilled, British Shorthairs are a great companion for homes with or without children. The British Shorthair cat personality combines the best of cat personalities; when they are well socialised as young kittens they are friendly and affectionate, but also independent and content." },
    { id: 2, image: "/images/download (5).jpeg", name: "Persian", price: 10500, des:"The Persians are known for their intricately inlaid metalwork as well as for their legacy of extraordinary architecture. Finely decorated pre-Islamic structures still stand in several ancient cities, as do spectacular mosques and shrines from the Muslim era." },
    { id: 3, image: "/images/download (6).jpeg", name: "Siamese", price: 20500, des:"Incredibly intelligent, affectionate and opinionated, they are considered the extroverts of the feline world. Inclined to bond strongly to one person, and often very vocal with a loud, low-pitched voice (known as a 'meezer'), the Siamese is very much a 'Marmite' type of cat, appealing to a very specific sort of person!" },
    { id: 4, image: "/images/download (7).jpeg", name: "Bombay Cat", price: 30500, des:"Younger Bombays are active, curious cats and adapt very easily to change. At any age, they love to look at the world around them and their favorite place may often turn out to be a window where they can observe the world outside. These cats are very affectionate and will, at times, demand time with their parents." },
    { id: 5, image: "/images/download (5).webp", name: "Sphynx Cat", price: 10500, des:"A Sphynx Cat is a hairless breed with a playful personality. The Sphynx cat is a medium-sized breed that's easily identifiable due to their hairless appearance. Their skin is wrinkly, soft, and warm to the touch. Their large ears and lemon-shaped eyes also contribute to the Sphynx cat's unique look" },
    { id: 6, image: "/images/download (6).webp", name: "Chartreux", price: 10600, des:"The Chartreux is a low-chaos, thoughtful cat, not too loud, demanding or dramatic.. They bond well with family, though typically bonding most strongly with just one person, and they are affectionate with everyone they live with, easy to handle and even said to be good travellers - which is not a usual feline trait." },
    { id: 7, image: "/images/download (7).webp", name: "Balinese Cat", price: 20700, des:"Balinese cats are famous for their elegant and aristocratic looks, and they are also one of the most playful breeds out there. Like their close relatives the Siamese, they are an affectionate and sensible breed ideal for households with children or other pets." },
    { id: 8, image: "/images/download (8).webp", name: "American Bobtail", price: 30900, des:"American bobtails have dog-like personalities; they love to play games, greet their owners at the door, are easily leashed trained and like to go for walks. Bobtails are friendly and intelligent, and are great family cats: they are good with children and other household pets." },
  ];
  
  

const detailspage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const cat = cats.find(cat => cat.id === parseInt(id));

  if (!cat) {
    return <div>Dog not found</div>;
  }

  return (
    <div className='position'>
        <div className='position-1'>
        <img src={cat.image} alt={cat.name} width="500" />

            <div className='position-2'>
                <h1>{cat.name}</h1>
                <p>Price: ${cat.price}</p>
                <p>{cat.des}</p>
                <button className='btn btn-outline-primary'>order now</button>&nbsp;
                <button onClick={() => {addToCart(cat); alert(`${cat.name} has been added to the cart!`);}} className='btn btn-outline-primary'>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};

export default detailspage;
