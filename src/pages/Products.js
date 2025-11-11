import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Hazelnut Coffee",
      price: "$120",
      originalPrice: "$150",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7fzANx7DXXT_8wK_mOUuY7vFfvxZfenWThuPBmiT7YWIqRWQuUz-eQ5CmXgdHVDcBDo&usqp=CAU"
    },
    {
      id: 2,
      name: "Costa Coffee",
      price: "$250",
      originalPrice: "$350",
      image: "https://media.istockphoto.com/id/533974694/photo/composition-with-cup-of-costa-coffee-coffee-and-beans.jpg?s=612x612&w=0&k=20&c=Ex9qb54E8KSwBu1t3RQXOd11aqtFzndv0TupHnHXm1Y="
    },
    {
      id: 3,
      name: "Country Bean Coffee",
      price: "$499",
      originalPrice: "$500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCVF-0tJlScs0jrraAocNGH6hZw8licTTYeMgGp2OnWLqY4sr4k4z0DDEC-y7orCXR0k&usqp=CAU"
    },
    {
      id: 4,
      name: "Decaf Coffee",
      price: "$120",
      originalPrice: "$150",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDq_Zl9_Q_lCBwQ9mHstWlBgUYXe1jHV76bA&s"
    }
  ];

  return (
    <section id="product" className="product">
      <div className="container">
        <h1>Products</h1>
      </div>
      
      <div className="container" id="container3">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 py-3 py-md-0">
              <div className="card">
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                  <h3>{product.name}</h3>
                  <p>
                    {product.price} <strike>{product.originalPrice}</strike> 
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

export default Products;

