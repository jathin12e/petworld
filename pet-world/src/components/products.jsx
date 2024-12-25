import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { useCart } from "./CartContext";

const animals = [
  
  { id: 2, category: "dog", image: "/images/download (1).jpeg", name: "Bull Dog", price: 10500, des: "Nicknamed the “sourmug,” the Bulldog is a stocky dog that moves with a rolling gait. It has a large head, folded ears, a short muzzle, a protruding lower jaw, and loose skin that forms wrinkles on the head and face." },
  { id: 3, category: "dog", image: "/images/download (2).jpeg", name: "German Shepherd", price: 20500 ,des:"The German shepherd dog is a herding breed known for its courage, loyalty and guarding instincts. This breed makes an excellent guard dog, police dog, military dog, guide dog for the blind and search and rescue dog. For many families, the German shepherd is also a treasured family pet"},
  { id: 4, category: "dog", image: "/images/download (3).jpeg", name: "Siberian Husky", price: 30500, des:"Siberian huskies are a working dog breed that has origins in Siberia, Russia. They've become popular due to their energetic personalities, unique looks, and friendly nature. They make great pets for all kinds of households, especially those with children and other dogs" },
  { id: 5, category: "dog", image: "/images/download.webp", name: "Beagle", price: 10500, des:"Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'thanks to its pleading expression'cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing." },
  { id: 1, category: "dog", image: "/images/download.jpeg", name: "Golden Retriever", price: 10000, des: "The golden retriever is even-tempered, intelligent and affectionate. Golden retrievers are playful, yet gentle with children, and they tend to get along well with other pets and strangers." },
  { id: 6, category: "dog", image: "/images/download (1).webp", name: "Chihuahua", price: 10700, des:"These clever little dogs Chihuahuas possess loyalty, charm, and big-dog attitude. Though tiny, usually ranging from 5-6 inches and under 6 pounds, these dogs are full of personality. They're very vocal, and despite their size, make alert companions who will let you know if someone is coming." },
  { id: 7, category: "dog", image: "/images/download (2).webp", name: "Dachshund", price: 21500, des:"The name “Dachshund” is actually German for “badger dog.” Dachshunds' short legs keep them low to the ground to track scents, and their narrow bodies allow them to crawl into burrows, looking for badgers. Despite their small size, Dachshunds are brave and fierce." },
  { id: 8, category: "dog", image: "/images/download (3).webp", name: "Bichon Frise", price: 30500, des:"The bichon frisé is considered a great all-around pet that is a playful yet gentle dog. Bichons get along well with other pets. They are generally considered very good with kids. In one survey, they ranked high on snapping at children, but caution is in order anytime dogs and small children are together." },
  { id: 9, category: "cat", image: "/images/download (4).jpeg", name: "British Shorthair", price: 10000, des:"Friendly and chilled, British Shorthairs are a great companion for homes with or without children. The British Shorthair cat personality combines the best of cat personalities; when they are well socialised as young kittens they are friendly and affectionate, but also independent and content." },
  { id: 10, category: "cat", image: "/images/download (5).jpeg", name: "Persian", price: 10500, des:"The Persians are known for their intricately inlaid metalwork as well as for their legacy of extraordinary architecture. Finely decorated pre-Islamic structures still stand in several ancient cities, as do spectacular mosques and shrines from the Muslim era." },
  { id: 11, category: "cat", image: "/images/download (6).jpeg", name: "Siamese", price: 20500, des:"Incredibly intelligent, affectionate and opinionated, they are considered the extroverts of the feline world. Inclined to bond strongly to one person, and often very vocal with a loud, low-pitched voice (known as a 'meezer'), the Siamese is very much a 'Marmite' type of cat, appealing to a very specific sort of person!" },
  { id: 12, category: "cat", image: "/images/download (7).jpeg", name: "Bombay Cat", price: 30500, des:"Younger Bombays are active, curious cats and adapt very easily to change. At any age, they love to look at the world around them and their favorite place may often turn out to be a window where they can observe the world outside. These cats are very affectionate and will, at times, demand time with their parents." },
  { id: 13, category: "cat", image: "/images/download (5).webp", name: "Sphynx Cat", price: 10500, des:"A Sphynx Cat is a hairless breed with a playful personality. The Sphynx cat is a medium-sized breed that's easily identifiable due to their hairless appearance. Their skin is wrinkly, soft, and warm to the touch. Their large ears and lemon-shaped eyes also contribute to the Sphynx cat's unique look" },
  { id: 14, category: "cat", image: "/images/download (6).webp", name: "Chartreux", price: 10600, des:"The Chartreux is a low-chaos, thoughtful cat, not too loud, demanding or dramatic.. They bond well with family, though typically bonding most strongly with just one person, and they are affectionate with everyone they live with, easy to handle and even said to be good travellers - which is not a usual feline trait." },
  { id: 15, category: "cat", image: "/images/download (7).webp", name: "Balinese Cat", price: 20700, des:"Balinese cats are famous for their elegant and aristocratic looks, and they are also one of the most playful breeds out there. Like their close relatives the Siamese, they are an affectionate and sensible breed ideal for households with children or other pets." },
  { id: 16, category: "cat", image: "/images/download (8).webp", name: "American Bobtail", price: 30900, des:"American bobtails have dog-like personalities; they love to play games, greet their owners at the door, are easily leashed trained and like to go for walks. Bobtails are friendly and intelligent, and are great family cats: they are good with children and other household pets." }
];

const ProductDetailsPage = () => {
  const { id } = useParams(); // Retrieve the animal ID from the URL
  const { addToCart } = useCart();

  const animal = animals.find((item) => item.id.toString() === id); // Find the selected animal

  if (!animal) {
    return <div className="error-message">Item not found</div>; // Handle invalid IDs
  }

  return (
    <div className="details-container">
      <div className="details-wrapper">
        <img
          src={animal.image}
          alt={animal.name}
          width="400"
          className="details-image"
        />
        <div className="details-info">
          <h1 className="details-title">{animal.name}</h1>
          <p className="details-price">Price: ${animal.price}</p>
          <p className="details-description">{animal.des}</p>
          <div className="details-buttons">
            <button className="btn btn-primary order-button">
              Order Now
            </button>
            <button
              onClick={() => {
                addToCart(animal);
                alert(`${animal.name} has been added to the cart!`);
              }}
              className="btn btn-primary add-to-cart-button"
              aria-label={`Add ${animal.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;




