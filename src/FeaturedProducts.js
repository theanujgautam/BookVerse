import React from 'react';
import ProductCard from './ProductCard';
import productsData from './productsData';

function ProductListing({ searchText }) {
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase()) ||
    product.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <div className="about-website">
        <p>Welcome to BookVerse, where words come alive! Explore captivating stories, thought-provoking non-fiction, poetry, and more. Immerse yourself in a diverse tapestry of knowledge and imagination. BookVerse: your companion for literary exploration. Happy reading!</p>
      </div>

      <h2>Featured Products</h2>

      <section className="product-listing">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            author={product.author}
            price={product.price}
            image={product.image}
            description={product.description}
            inStock={product.inStock}
          />
        ))}
      </section>
    </main>
  );
}

export default ProductListing;
