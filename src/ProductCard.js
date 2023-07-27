import React from 'react';
import './ProductCard.css';

function ProductCard({ title, author, price, image, description }) {
  return (
    <div className="product-card">
      <div className="product-content">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>₹{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
