// src/ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './details.css'
import { useCart } from './CartContext';

const dogs = [
    { id: 1, image: "/images/download.jpeg", name: "Golden Retriever", price: 10000, des: "The golden retriever is even-tempered, intelligent and affectionate. Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers." },
    { id: 2, image: "/images/download (1).jpeg", name: "Bull Dog", price: 10500, des: "Nicknamed the “sourmug,” the Bulldog is a stocky dog that moves with a rolling gait. It has a large head, folded ears, a short muzzle, a protruding lower jaw, and loose skin that forms wrinkles on the head and face." },
    { id: 3, image: "/images/download (2).jpeg", name: "German Shepherd", price: 20500 ,des:"The German shepherd dog is a herding breed known for its courage, loyalty and guarding instincts. This breed makes an excellent guard dog, police dog, military dog, guide dog for the blind and search and rescue dog. For many families, the German shepherd is also a treasured family pet"},
    { id: 4, image: "/images/download (3).jpeg", name: "Siberian Husky", price: 30500, des:"Siberian huskies are a working dog breed that has origins in Siberia, Russia. They've become popular due to their energetic personalities, unique looks, and friendly nature. They make great pets for all kinds of households, especially those with children and other dogs" },
    { id: 5, image: "/images/download.webp", name: "Beagle", price: 10500, des:"Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'thanks to its pleading expression'cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing." },
    { id: 6, image: "/images/download (1).webp", name: "Chihuahua", price: 10700, des:"These clever little dogs Chihuahuas possess loyalty, charm, and big-dog attitude. Though tiny, usually ranging from 5-6 inches and under 6 pounds, these dogs are full of personality. They're very vocal, and despite their size, make alert companions who will let you know if someone is coming." },
    { id: 7, image: "/images/download (2).webp", name: "Dachshund", price: 21500, des:"The name “Dachshund” is actually German for “badger dog.” Dachshunds' short legs keep them low to the ground to track scents, and their narrow bodies allow them to crawl into burrows, looking for badgers. Despite their small size, Dachshunds are brave and fierce." },
    { id: 8, image: "/images/download (3).webp", name: "Bichon Frise", price: 30500, des:"The bichon frisé is considered a great all-around pet that is a playful yet gentle dog. Bichons get along well with other pets. They are generally considered very good with kids. In one survey, they ranked high on snapping at children, but caution is in order anytime dogs and small children are together." },
  ];
  

const detailspage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const dog = dogs.find(dog => dog.id === parseInt(id));

  if (!dog) {
    return <div>Dog not found</div>;
  }

  return (
    <div className='position'>
        <div className='position-1'>
            <img src={dog.image} alt={dog.name} width="400" />
            <div className='position-2'>
                <h1>{dog.name}</h1>
                <p>Price: ${dog.price}</p>
                <p>{dog.des}</p>
                <button className='btn btn-outline-primary'>order now</button>&nbsp;
                <button onClick={() => {addToCart(dog); alert(`${dog.name} has been added to the cart!`);}} className='btn btn-outline-primary'>Add to Cart</button>
            </div>
        </div>
    </div>
  );
};

export default detailspage;
