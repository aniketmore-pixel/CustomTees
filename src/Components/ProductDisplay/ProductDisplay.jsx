import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import size_guide_image from "../Assets/size_guide.png"; // Your size guide image
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify"; // Import toast for notifications

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [hoveredSize, setHoveredSize] = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false); // State to show/hide size guide

  const sizes = ["S", "M", "L", "XL", "XXL"];

  // Function to handle selecting a size
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product.id);
    } else {
      toast.error("Please select a size before adding to cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Function to close the size guide pop-up
  const closeSizeGuide = () => {
    setShowSizeGuide(false);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* Product image display */}
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        {/* Star rating display */}
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        {/* Pricing display */}
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        {/* Product description */}
        <div className="productdisplay-right-description">
          A cozy and versatile pullover shirt crafted from soft, breathable fabric for all-day comfort. Features a relaxed fit with ribbed cuffs and hem.
        </div>
        {/* Size selection */}
        <div className="productdisplay-right-size">
          <h1>
            Select Size
            {/* Size Guide Anchor */}
            <a
              href="#"
              className="size-guide-link"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                setShowSizeGuide(true); // Open the size guide
              }}
            >
              Size Guide
            </a>
          </h1>
          <div className="productdisplay-right-sizes">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-box ${selectedSize === size ? "selected" : ""} ${hoveredSize === size ? "hovered" : ""}`}
                onClick={() => handleSizeSelect(size)}
                onMouseEnter={() => setHoveredSize(size)}
                onMouseLeave={() => setHoveredSize(null)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        {/* Add to Cart Button */}
        <button onClick={handleAddToCart}>ADD TO CART</button>
        {/* Product category and tags */}
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>

      {/* Size Guide Pop-up */}
      {showSizeGuide && (
        <div className="size-guide-overlay">
          <div className="size-guide-popup">
            <button className="size-guide-close" onClick={closeSizeGuide}>
              &times; {/* Close icon (cross) */}
            </button>
            <img src={size_guide_image} alt="Size Guide" className="size-guide-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
