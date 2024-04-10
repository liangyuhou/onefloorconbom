import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductView.css'; // 引入您的 CSS 樣式表文件
import Navbar from './Navbar';
import img1 from '../images/product1.jpg';
import img2 from '../images/product2.jpg';
import img3 from '../images/product3.jpg';
import img4 from '../images/product4.jpg';
import img5 from '../images/product5.jpg';

function ProductView() {
    // 假設您有一個包含商品資訊的陣列
    const products = [
        { id: 1, name: 'Product 1', img:img1  ,category: 'Category A',  price: 10 ,colors: ['Black', 'Silver', 'Beige']},
        { id: 2, name: 'Product 2', img:img2  ,category: 'Category B',  price: 20 ,colors: ['Black', 'Silver', 'Beige']},
        { id: 3, name: 'Product 3', img:img3  ,category: 'Category A',  price: 30 ,colors: ['Black', 'Silver', 'Beige']},
        { id: 4, name: 'Product 4', img:img4  ,category: 'Category B',  price: 30 ,colors: ['Black', 'Silver', 'Beige']},
        { id: 5, name: 'Product 5', img:img5  ,category: 'Category A',  price: 30 ,colors: ['Black', 'Silver', 'Beige']},
        // 其他商品...
    ];

    // 增加狀態來跟蹤選擇的分類
    const [selectedCategory, setSelectedCategory] = useState('Category A');

    // 根據選擇的分類篩選商品
    const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <Navbar />
            <div className='product-view-container'>
                <h2>立地招牌></h2>
                
                <div className="horizontal-line"></div>
                {/* 下拉菜單 */}
               
            
                     <div className="product-list">
                     {filteredProducts.map(product => (
                         <div key={product.id} className="product-item" onClick={() => { window.location = `/product/${product.id}` }}>
                             <img src={product.img} alt={product.name}></img>
                             <div className='product-detail'>
                                 <h3>{product.name}</h3>
                                 <p>NT${product.price}</p>
                                
                             </div>
                             {product.colors.map(color => (
                        <span key={color} className="product-color" style={{ backgroundColor: color }}></span>
                    ))}
                         </div>
                     ))}
                
                </div>
            </div>
        </div>
    );
}

export default ProductView;

