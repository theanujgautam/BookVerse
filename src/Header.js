import React from 'react';

function Header({ handleSearch }) {
  const handleInputChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <header>
      <nav>
        <div className="logo.png">
          <img src="logo.png" alt="BookVerse Logo" />
          <h1>BookVerse</h1>
        </div>
        <div className="search-container">
          <input type="text" id="searchInput" placeholder="Search book or an author..." onChange={handleInputChange} />
          <button type="button" id="searchButton">Search</button>
        </div>
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>Authors</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
