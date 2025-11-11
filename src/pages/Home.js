import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <h1>WELCOME TO SEEMA COFFEE</h1>
        <h3>Start Your Day With a <br /> Fresh Coffee</h3>
        <Link to="/menu" className="btn" id="btn">
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
