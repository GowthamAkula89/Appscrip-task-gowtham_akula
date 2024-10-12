import React from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.title} width={320} height={397} className={styles.productImage} />
      
      <div>
        <h4 className={styles.title}>{product.title}</h4>
        <div className={styles.info}>
        <p>Sign in or Create an account to see pricing</p>
        <Image src="/assets/heart.png" alt="wishlist" width={24} height={24} className={styles.wishlistIcon} />
      </div>
      </div>
      
    </div>
  );
}

export default ProductCard;
