import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="heading">About<span>Us</span></div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1597983187002-35a3e1c896d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlc3QlMjBjb2ZmZWUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Coffee beans"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3>What Makes Our Coffee Special</h3>
            <p>
              My coffee stands out because it's not just a drink, but a
              carefully crafted experience. We source only the highest quality
              Arabica beans, ensuring each cup is bursting with flavor.
              <br /><br />
              Our roasting process is meticulous, bringing out the unique
              characteristics of each bean, whether it's the delicate fruity
              notes of an Ethiopian Yirgacheffe or the rich, chocolatey
              undertones of a Colombian Supremo. <br /><br />
              From bean to brew, we prioritize freshness and quality, resulting
              in a truly exceptional coffee that will awaken your senses and
              elevate your day.
            </p>
            <Link to="/menu">
              <button id="about-btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
