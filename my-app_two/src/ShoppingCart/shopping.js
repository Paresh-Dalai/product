

import React, { useState } from 'react';
import './shopping.css';



function Shopping_Cart () {
    const [cartItems, setCartItems] = useState([]);
    const [products] = useState([
      { id: 1, name: 'Sony Television', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImJ6vH0xW3Tb4YtGDsL5AD1YLs2UEq--KSw&usqp=CAU" , price: 50_650},
      { id: 2, name: 'OnePlus_Mobile', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZoZfn8DB4Y5USI6iHqN9ZoWcHr5-LuoWTg&usqp=CAU",  price: 25_350 },
      { id: 3, name: 'Boat Smart Watch', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Y0ZdFRrIBHNneI_F1mCDn0ik8BqPi7Ie8lOVWLSEyccF5JNPalPboMEY-hNiTo362aI&usqp=CAU", price: 3435 },
    ]);
  
    const addItemToCart = (productId) => {
      const productToAdd = products.find(product => product.id === productId);
      if (productToAdd) {
        setCartItems([...cartItems, productToAdd]);
      }
    };
  
    const removeItemFromCart = (productId) => {
      const updatedCartItems = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCartItems);
    };
  
    const totalItems = cartItems.length;
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  
    return (
      <div className="App">
        <h1>Shopping Cart</h1>
        
        <div className="cart">
        
          <p>Total Items : {totalItems}</p>
          <p>Subtotal : ₹ {subtotal.toFixed(2)}</p>
         
         
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>₹{item.price.toFixed(2)}</span>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="products">
          <h2>Products</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt='product_image' />
                <span>{product.name}</span>
                <span>₹{product.price.toFixed(2)}</span>
                <button onClick={() => addItemToCart(product.id)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    );
  }
  
  export default Shopping_Cart;