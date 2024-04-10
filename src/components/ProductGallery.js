import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import product4 from '../images/product4.jpg';
import product5 from '../images/product5.jpg';
import "./ProductGallery.css";

function ProductGallery() {
    return (
        <div className="product-gallery">
            <Link to="/productview1" className="product-view-link">
                <img src={product1} alt="Product 1" />
                <span className="image-caption">牆上招牌 <br/>WALL SIGNS</span>
            </Link>
            <Link to="/product2"><img src={product2} alt="Product 2" /></Link>
            <Link to="/product3"><img src={product3} alt="Product 3" /></Link>
            <Link to="/product4"><img src={product4} alt="Product 4" /></Link>
            <Link to="/product5"><img src={product5} alt="Product 5" /></Link>
        </div>
    );
}

export default ProductGallery;
