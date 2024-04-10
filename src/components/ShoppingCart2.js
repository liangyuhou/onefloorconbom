import React, { useState } from 'react';
import "./ShoppingCart2.css";
import Navbar from './Navbar';
import img1 from '../images/product1.jpg';
import img2 from '../images/product2.jpg';
import img3 from '../images/product3.jpg';
import img4 from '../images/product4.jpg';
import img5 from '../images/product5.jpg';

function ShoppingCart2() {
    const [cart, setCart] = useState([]);

    return (
        <div>
            <Navbar/>
            <div className="progress">
                <div className="progress-step">1 Basket</div>
                <div className="progress-step active">2 Details</div>
                <div className="progress-step">3 Shipping</div>
                <div className="progress-step">4 Payments</div>
            </div>
        </div>
    );
}

export default ShoppingCart2;
