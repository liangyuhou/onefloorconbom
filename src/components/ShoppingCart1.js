import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ShoppingCart.css";
import Navbar from './Navbar';
import img1 from '../images/product1.jpg';
import img2 from '../images/product2.jpg';
import img3 from '../images/product3.jpg';
import img4 from '../images/product4.jpg';
import img5 from '../images/product5.jpg';

function ShoppingCart1() {
    const [cart, setCart] = useState([]);
    const productList = [
        { id: 1, name: 'Product 1', img:img1  ,category: 'Category A',  price: 10 ,colors: ['Black', 'Silver', 'Beige'], size: '100*100'},
        { id: 2, name: 'Product 2', img:img2  ,category: 'Category B',  price: 20 ,colors: ['Black', 'Silver', 'Beige'], size: '100*100'},
        { id: 3, name: 'Product 3', img:img3  ,category: 'Category A',  price: 30 ,colors: ['Black', 'Silver', 'Beige'], size: '100*100'},
        { id: 4, name: 'Product 4', img:img4  ,category: 'Category B',  price: 30 ,colors: ['Black', 'Silver', 'Beige'], size: '100*100'},
        { id: 5, name: 'Product 5', img:img5  ,category: 'Category A',  price: 30 ,colors: ['Black', 'Silver', 'Beige'], size: '100*100'},
        // 其他商品...
    ];

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };



    return (
        <div>
            <Navbar/>
            <div className="progress">
                <div className="progress-step active">1 Basket</div>
                <div className="progress-step">2 Details</div>
                <div className="progress-step">3 Shipping</div>
                <div className="progress-step">4 Payments</div>
            </div>
            <div className="shopping-cart">
                <div className="product-list">
                    <ul>
                        {productList.map((product) => (
                            <li key={product.id}>
                                <button onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart">
                    <ul>
                        {cart.map((product) => (
                            <li key={product.id}>
                                <div className="product-details">
                                <img src={product.img} alt={product.name}></img>
                                <div className="product-details-w">
                                    <span style={{ fontWeight: 'bold' , fontSize: '16px'}}>{product.name}</span>
                                <br/>
                                    <span>Color : {product.colors}</span>
                                    <br/>
                                    <span>Size : {product.size}</span>
                                    
                                    </div>
                             <div className='product-details-r'>
                                <span style={{ fontWeight: 'bold',fontSize: '16px' }}>NT${product.price}</span>
                                <button onClick={() => removeFromCart(product.id)}>
                                <i className="fas fa-trash-alt"></i>
                                </button>
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className='cart-price'>
                    <div className="cart-price-title">Subtotal<br/>Tax & duty<br/>Shipping</div>
                    <div className="cart-price-value">
                         NT${getTotalPrice()}<br/>
                         Included<br/>
                         Free
                    </div>
                    </div>
                    <div className='cart-price-t'>
                    <div className="cart-price-title-t">Total</div>
                    <div className="cart-price-value-t">NT${getTotalPrice()}</div>
                    </div>
                    <Link to="/shoppingcart2" className="checkout-button">CHECKOUT</Link>
            </div>
            
        </div>
    );
}

export default ShoppingCart1;
