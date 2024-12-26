import React from 'react'; 
import ProductList from '../components/ProductList';
import '../css/Home.css'; // Import the CSS file
import '../css/ProductList.css'; // Import the CSS file

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Full-Stack App!</h1>
      <ProductList />
    </div>
  );
};

export default Home;
