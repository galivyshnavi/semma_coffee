import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/image1.png", alt: "Coffee Gallery 1" },
    { id: 2, src: "/image2.png", alt: "Coffee Gallery 2" },
    { id: 3, src: "/image3.png", alt: "Coffee Gallery 3" },
    { id: 4, src: "/image4.png", alt: "Coffee Gallery 4" },
    { id: 5, src: "/image5.png", alt: "Coffee Gallery 5" },
    { id: 6, src: "/image6.png", alt: "Coffee Gallery 6" }
  ];

  return (
    <div className="container" id="gallary">
      <h1>Our <span>Gallery</span></h1>
      <div className="row" style={{marginTop: '30px'}}>
        {galleryImages.map((image) => (
          <div key={image.id} className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={image.src} alt={image.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

