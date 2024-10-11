'use client'
import React, { useState, useEffect } from 'react'
import styles from "./page.module.css";
import GreyStrip from "@/components/GreyStrip/greyStrip";
import Header from "@/components/Header/header";
import Hero from "@/components/Hero/Hero";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
  }


  useEffect(() => {
      fetchProducts();
  }, [])
  console.log(products[0])
  return (
    <div>
      <main className={styles.main}>
        <GreyStrip/>
        <Header/>
        <Hero/>
        {products.length !== 0 &&
        <ProductCard product={products[0]}/>}
      </main>
      
    </div>
  );
}
