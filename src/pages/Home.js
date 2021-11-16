import React from 'react';
import Pizza from '../assets/pizza.jpeg';
import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Pizza})` }}>
      <div className="headerContainer">
        <h1> PIZZA OF THE YEAR</h1>
        <p>PIZZA OVERSIMPLE</p>
        <Link to="/menu">
          <button>ORDER</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
