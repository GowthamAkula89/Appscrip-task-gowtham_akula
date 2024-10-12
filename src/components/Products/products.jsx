'use client';

import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import Filter from '../Filters/Filter';
import ProductCard from '../ProductCard/ProductCard';
const filterOptions = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'];
import CustomDropdown from '../CustomDropDown/CustomDropDown';


const Products = () => {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [products, setProducts] = useState([]);
  
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    };
  
    useEffect(() => {
        fetchProducts();
    }, []);
    
    console.log(products)
    return (
      <div className={styles.productsContainer}>
        <div className={styles.sort}>

            <div className={styles.show}>
                <p>{products.length} ITEMS</p>
                {isFilterVisible ? (
                <p onClick={() => setIsFilterVisible(false)}>
                    <img src="/assets/hide.png" alt="hide" /> HIDE FILTER
                </p>
                ) : (
                <p onClick={() => setIsFilterVisible(true)}>
                    <img src="/assets/show.png" alt="show" /> SHOW FILTER
                </p>
                )}
            </div>
            <div className={styles.filter}>FILTER</div>
                
            <CustomDropdown
                options={filterOptions}
                onSelect={(option) => console.log('Selected:', option)}
            />
        </div>
  
        <div className={styles.bottom}>
            {isFilterVisible && (
            <div className={styles.filters}>
                <Filter />
            </div>
            )}
            <div className={isFilterVisible ? styles.productsShow : styles.productsHide}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default Products;
