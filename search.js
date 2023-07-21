// Get references to the search input and the product cards
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.product-card');

// Function to filter products based on the search term
function filterProducts(searchTerm) {
  searchTerm = searchTerm.trim().toLowerCase();

  // Loop through each product card and hide/show based on the search term
  productCards.forEach(productCard => {
    const productName = productCard.getAttribute('data-name').toLowerCase();

    if (productName.includes(searchTerm)) {
      productCard.style.display = 'block'; // Show the product card
    } else {
      productCard.style.display = 'none'; // Hide the product card
    }
  });
}

// Event listener for the search input
searchInput.addEventListener('input', function() {
  const searchTerm = this.value;
  filterProducts(searchTerm);
});
