import React from 'react';
import './ProductCard.css';

function ProductCard({ title, author, price, image, description , inStock}) {
  return (
    <div className="product-card">
      <div className="product-content">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>₹{price}</p>
        <p>{description}</p>
        {inStock ? null : <span className="sold-out-label">Sold Out</span>}
      </div>
    </div>
  );
}

export default ProductCard;
