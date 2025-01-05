import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./order.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    landmark: "",
    pincode: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    // Fetch the dog details based on the ID from the URL
    fetch(`https://petworld-h7ux.onrender.com/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setDog(data))
      .catch((error) => console.error("Error fetching dog:", error));
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.landmark.trim()) newErrors.landmark = "Landmark is required";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const handleOrderClick = () => {
    if (validateForm()) {
      setOrderSuccess(true);
    } else {
      setOrderSuccess(false);
    }
  };

  if (!dog) {
    return <div></div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10px", color: "gray" }}>
        Ordering - {dog.name}
      </h1>
      <div>
        <div className="p-2">
          <img
            src={`https://petworld-h7ux.onrender.com/images/${dog.image}`}
            alt={dog.name}
            className="image-position-1"
          />
          <div className="p-3">
            <h1 style={{ color: "red" }}>{dog.name}</h1>
            <p>Price: ${dog.price}</p>
            <div>
              Address:{" "}<br />
              <input
                id="text1"
                type="text"
                name="address"
                placeholder="Address"
                style={{ margin: "10px" }}
                value={formData.address}
                onChange={handleInputChange}
              />
              <span style={{ color: "red" }}>{errors.address}</span>
              <br />
              Landmark:{" "}<br />
              <input
                id="text1"
                type="text"
                name="landmark"
                placeholder="Landmark"
                style={{ margin: "10px" }}
                value={formData.landmark}
                onChange={handleInputChange}
              />
              <span style={{ color: "red" }}>{errors.landmark}</span>
              <br />
              Pincode:{" "}<br />
              <input
                id="text1"
                type="number"
                name="pincode"
                placeholder="Pincode"
                style={{ margin: "10px" }}
                value={formData.pincode}
                onChange={handleInputChange}
              />
              <span style={{ color: "red" }}>{errors.pincode}</span>
              <br />
              Phone No:{" "}<br />
              <input
                id="text1"
                type="number"
                name="phone"
                placeholder="Phone Number"
                style={{ margin: "10px" }}
                value={formData.phone}
                onChange={handleInputChange}
              />
              <span style={{ color: "red" }}>{errors.phone}</span>
              <br />
            </div>
            <h1>Payment -- Cash on Delivery</h1>
            <button onClick={handleOrderClick}>Order Now</button>
            {orderSuccess && (
              <p style={{ color: "green", marginTop: "10px" }}>
                Order placed successfully!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
