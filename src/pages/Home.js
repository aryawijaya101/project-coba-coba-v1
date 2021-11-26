import React from 'react';
import Pizza from '../assets/pizza.jpeg';
import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Pizza})` }}>
      <div className="headerContainer">
        <h1> BEST PIZZA</h1>
        <p>BY ARYA WIJAYA V1</p>
        <Link to="/menu">
          <button>ORDER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
