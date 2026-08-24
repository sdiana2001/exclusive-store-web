import React from 'react';
import styles from './MainHeader.module.scss';

export const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <a href="#" className={styles.header__logo}>Exclusive</a>

        {/* Навигация */}
        <nav className={styles.header__nav}>
          <a href="#" className={`${styles.header__navLink} ${styles.header__navLink_active}`}>
            Home
          </a>
          <a href="#" className={styles.header__navLink}>
            Contact
          </a>
          <a href="#" className={styles.header__navLink}>
            About
          </a>
          <a href="#" className={styles.header__navLink}>
            Sign Up
          </a>
        </nav>

        {/* Правый блок: Поиск и Иконки */}
        <div className={styles.header__actions}>
          <div className={styles.header__search}>
            <input type="text" placeholder="What are you looking for?" />
            <button type="button" aria-label="Search">
              <img src="/public/icons/Search.svg" alt="Search" />
            </button>
          </div>

          <div className={styles.header__iconGroup}>
            {/* Избранное */}
            <button className={styles.header__iconBtn} aria-label="Favorite">
             <img src="/public/icons/Favorite.svg" alt="Favorite" />
            </button>

            {/* Корзина */}
            <button className={styles.header__iconBtn} aria-label="Cart">
             <img src="/public/icons/Cart.svg" alt="Cart" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};