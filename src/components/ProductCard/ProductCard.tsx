import React from 'react';
import styles from './ProductCard.module.scss';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  reviewsCount: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        {product.discount && (
          <span className={styles.card__discount}>-{product.discount}%</span>
        )}

        <div className={styles.card__actions}>
          <button className={styles.card__iconBtn} aria-label="Favorite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className={styles.card__iconBtn} aria-label="Quick View">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        <img src={product.image} alt={product.name} className={styles.card__image} />

        <button className={styles.card__buyBtn}>Add To Cart</button>
      </div>

      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{product.name}</h3>

        <div className={styles.card__prices}>
          <span className={styles.card__currentPrice}>${product.price}</span>
          {product.oldPrice && (
            <span className={styles.card__oldPrice}>${product.oldPrice}</span>
          )}
        </div>

        <div className={styles.card__rating}>
          <div className={styles.card__stars}>
            {'★'.repeat(Math.floor(product.rating))}
          </div>
          <span className={styles.card__reviews}>({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
};