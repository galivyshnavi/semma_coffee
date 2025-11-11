import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Affogato",
      price: "99/-",
      originalPrice: "100/-",
      image: "https://media.istockphoto.com/id/543217434/photo/drowned.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zl5MfZ1UC-z_MThPKuF2QaPkBr609-M4XfFrY_4p7GQ="
    },
    {
      id: 2,
      name: "Macchiato",
      price: "90/-",
      originalPrice: "110/-",
      image: "https://media.istockphoto.com/id/1442009345/photo/mocha-with-latte-art-served-in-a-cup-isolated-on-dark-grey-background-top-view-of-hot-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=q4EduNnhYeDXxASsPnNPrP_YkTKkEi5FRXthrZkJmVE="
    },
    {
      id: 3,
      name: "Espresso",
      price: "100/-",
      originalPrice: "200/-",
      image: "https://media.istockphoto.com/id/1126871442/photo/coffee-cup.webp?a=1&b=1&s=612x612&w=0&k=20&c=UAO6jxvBYe-ATZoz7KLgQRUA1zDK5Ug3VMrkU-tzkq0="
    },
    {
      id: 4,
      name: "Pour Over",
      price: "120/-",
      originalPrice: "150/-",
      image: "https://images.unsplash.com/photo-1574359172160-c7ae4fadcacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdXIlMjBvdmVyfGVufDB8fDB8fHww"
    },
    {
      id: 5,
      name: "Cold Brew",
      price: "200/-",
      originalPrice: "300/-",
      image: "https://media.istockphoto.com/id/1144838255/photo/barista-pours-milk-into-cold-brew-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=hL4O3VFetaQGPsO0o1181mJht_eTj4LmU2BvK3h9ZJA="
    },
    {
      id: 6,
      name: "AeroPress",
      price: "130/-",
      originalPrice: "150/-",
      image: "https://media.istockphoto.com/id/2198108247/photo/top-view-of-coffee-in-a-glass-cup-prepared-with-aeropress.webp?a=1&b=1&s=612x612&w=0&k=20&c=gB8w3EOy_mno8Kzsn1mS_Fby-sl0H_jE6_vN2o9h0M0="
    },
    {
      id: 7,
      name: "Moka Pot",
      price: "100/-",
      originalPrice: "200/-",
      image: "https://media.istockphoto.com/id/1148605793/photo/moka-pot-with-coffee-and-cup.jpg?s=612x612&w=0&k=20&c=Ewgk7X4hxSJJV7GxFg-4VyO2Dwg4NqWfDfBGGHTBNfo="
    },
    {
      id: 8,
      name: "French Press",
      price: "120/-",
      originalPrice: "150/-",
      image: "https://media.istockphoto.com/id/493685876/photo/hot-coffee-from-a-french-press.webp?a=1&b=1&s=612x612&w=0&k=20&c=GW45v5TB7az0mQ8v3steBoIKK8Fyy556hRn6K2rXss0="
    }
  ];

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading3">
          Coffee Menu
          <i className="fa-solid fa-mug-saucer mug-icon"></i>
        </div>
      </div>
      
      <div className="container" id="container2">
        <div className="row">
          {menuItems.map((item) => (
            <div key={item.id} className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src={item.image} alt={item.name} />
                <div className="card-body">
                  <div className="star text-center">
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.price} <strike>{item.originalPrice}</strike> 
                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
