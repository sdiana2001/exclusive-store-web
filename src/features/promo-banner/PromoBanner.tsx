import React from 'react';
import styles from './PromoBanner.module.scss';
import appleLogo from '@/assets/icons/Apple.svg'; // Положи иконку яблока в assets/icons/
import heroImg from '@/assets/bg/bg.png'; // Положи картинку айфона в assets/images/

export const PromoBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__content}>
        <div className={styles.banner__header}>
          <img src={appleLogo} alt="Apple Logo" />
          <span className={styles.banner__brand}>iPhone 14 Series</span>
        </div>

        <h1 className={styles.banner__title}>Up to 10% off Voucher</h1>

        <a href="#" className={styles.banner__link}>
          <span>Shop Now</span>
          <svg width="19" height="16" viewBox="0 0 19 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1.5 8H17.5M17.5 8L10.5 1M17.5 8L10.5 15" />
          </svg>
        </a>
      </div>

      <div className={styles.banner__imageWrapper}>
        <img src={heroImg} alt="iPhone 14" className={styles.banner__image} />
      </div>

      {/* Точки слайдера */}
      <div className={styles.banner__dots}>
        <span className={styles.banner__dot} />
        <span className={`${styles.banner__dot} ${styles.banner__dot_active}`} />
        <span className={styles.banner__dot} />
        <span className={styles.banner__dot} />
        <span className={styles.banner__dot} />
      </div>
    </div>
  );
};