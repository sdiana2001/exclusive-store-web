import React from 'react';
import styles from './TopHeader.module.scss';

export const TopHeader: React.FC = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.topHeader__container}>
        <div className={styles.topHeader__content}>
          <p className={styles.topHeader__text}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a href="#" className={styles.topHeader__link}>ShopNow </a>
        </div>

        <select className={styles.topHeader__langSelect} defaultValue="en">
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </div>
  );
};