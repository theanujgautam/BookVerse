import React, { useState } from 'react';
import Header from './Header';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };


  return (
    <div className="App">
      <Header handleSearch={handleSearch}/>
      <FeaturedProducts searchText={searchText}/>
      <Footer />
    </div>
  );
}

export default App;
