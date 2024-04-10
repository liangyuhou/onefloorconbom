import React, { useState } from 'react';
import './ProductPage.css';
import Navbar from "./Navbar";
import img1 from '../images/product1.jpg';
import img2 from '../images/product2.jpg';
import img3 from '../images/product3.jpg';
import img4 from '../images/product4.jpg';
import img5 from '../images/product5.jpg';

function ProductPage() {
    const product = {
        id: 1,
        name: "ARCYLIC",
        price: 100,
        description: "Ideal for businesses, events, and personal use, our acrylic signs can be customized with your logo, text, or graphics to create a unique and eye-catching display. With easy installation and maintenance, you can enjoy the benefits of our acrylic signs for years to come.",
        colors: ['Black', 'Silver', 'Beige'], // Colors available for the product
        sizes: ['S', 'M', 'L'], // Sizes available for the product
        images: [img1, img2,img3,img4,img5], // Product images
    };
    

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(product.sizes[0]);


    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} ${size} of ${product.name} to cart.`);
        // 触发提示框
    window.alert('Added to Cart!');
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="product-page">
            <Navbar />
            <div className="product-container">
                <div className="image-container">
                    
                    <div className="main-image">
                        <img src={product.images[currentImageIndex]} alt={product.name} />
                    </div>
                    <div className="thumbnails">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={product.name}
                                className={index === currentImageIndex ? "active" : ""}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <hr className="divider" />
                    <p className="description">{product.description}</p>

                    <p className="color-title">COLOR</p>
                    <div className="colors">
                        
                        {product.colors.map((color, index) => (
                            <span key={index} className="color" style={{ backgroundColor: color }}></span>
                        ))}
                    </div>
                    <div className="size-dropdown">
                        <label>SIZE</label>
                        <select value={size} onChange={handleSizeChange}>
                            {product.sizes.map((s, index) => (
                                <option key={index} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="price-container">
    <p className="price-label">PRICE</p>
    <p className="price-value" style={{ fontWeight: 'bold', fontSize: '24px' }}>${product.price}</p>
</div>
<div className='quantity-add-to-cart'>
                    <div className="quantity-selection">
    {/* 减号按钮 */}
    <button className="quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
    {/* 数量显示 */}
    <span>{quantity}</span>
    {/* 加号按钮 */}
    <button className="quantity-button" onClick={() => setQuantity(quantity + 1)}>+</button>
</div>
                    <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>
                </div>
                </div>
            <div className="size-chart">
                <h3>Size Chart</h3>
                {/* Add your size chart here */}
            </div>
            <div className="notes">
                <h3>Notes</h3>
                {/* Add your notes here */}
            </div>
        </div>
    );
}

export default ProductPage;
