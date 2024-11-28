import React  from "react";
import { rtdb } from "../firebase";
import { ref, set } from "firebase/database";

const search = () => {
  

  const dogindex = [
    { id: 1, category:"dog", image: "images/download.jpeg", name: "Golden Retriever", price: 10000 },
    { id: 2, category:"dog", image: "images/download (1).jpeg", name: "Bull Dog", price: 10500 },
    { id: 3, category:"dog", image: "images/download (2).jpeg", name: "German Shepherd", price: 20500 },
    { id: 4, category:"dog", image: "images/download (3).jpeg", name: "Siberian Husky", price: 30500 },
    { id: 5, category:"dog", image: "images/download.webp", name: "Beagle", price: 10500 },
    { id: 6, category:"dog", image: "images/download (1).webp", name: "Chihuahua", price: 10700 },
    { id: 7, category:"dog", image: "images/download (2).webp", name: "Dachshund", price: 21500 },
    { id: 8, category:"dog", image: "images/download (3).webp", name: "Bichon Frise", price: 30500 },
    {
      id:9, category:"cat",
      image:"images/download (4).jpeg",
      name:"british shorthair",
      price:10000
    },
    {
      id:10, category:"cat",
      image:"images/download (5).jpeg",
      name:"Persian",
      price:10500
    },
    {
      id:11, category:"cat",
      image:"images/download (6).jpeg",
      name:"saimese",
      price:20500
    },
    {
      id:12, category:"cat",
      image:"images/download (7).jpeg",
      name:"bomay cat",
      price:30500
    },
  {
    id:13, category:"cat",
    image:"images/download (5).webp",
    name:"Sphynx cat",
    price:10500
  },
  {
    id:14, category :"cat",
    image:"images/download (6).webp",
    name:"Chartrex",
    price:10600
  },
  {
    id:15, category:"cat",
    image:"images/download (7).webp",
    name:"balinese cat",
    price:20700
  },
  {
    id:16, category:"cat",
    image:"images/download (8).webp",
    name:"American Bobtail",
    price:30900
  }
  ];
  


  // Function to insert data into Realtime Database
  const pushData = async () => {
    try {
      const dogRef = ref(rtdb, "dogs"); // Reference to "dogs" node
      await set(dogRef, { dogindex });
      console.log("Data pushed successfully!");
      alert("Data inserted into the database successfully!");
    } catch (error) {
      console.error("Error pushing data: ", error);
    }
  };

  // Function to search data in Realtime Database
  

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dog Management</h1>

      {/* Insert Data Button */}
      <button onClick={pushData} style={{ marginBottom: "20px" }}>
        Insert Data into Database
      </button>

      {/* Search Bar */}
      
    </div>
  );
};

export default search;
