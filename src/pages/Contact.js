import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', number: '' });
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-7 mb-4">
            <h2 className="mb-3">Contact <span className="custom-highlight">Us</span></h2>
            <p>If you have any questions about our menu, services, or bookings,
              feel free to reach out using the form below. We'd love to hear from you!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  className="form-control" 
                  type="tel" 
                  placeholder="Number" 
                  name="number" 
                  value={formData.number}
                  onChange={handleChange}
                  required 
                />
              </div>
              <button type="submit" className="btn custom-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5" id="col">
            <h2>Info</h2>
            <p><i className="fa-regular fa-envelope me-2"></i> Seemacofee@gmail.com</p>
            <p><i className="fa-solid fa-phone me-2"></i> +91 9876543210</p>
            <p><i className="fa-solid fa-building-columns me-2"></i> Yelahanka, Bangalore</p>
            <p>We are open every day from 8:00 AM to 10:00 PM. Visit us for fresh coffee, delicious snacks, and a cozy
              atmosphere.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
