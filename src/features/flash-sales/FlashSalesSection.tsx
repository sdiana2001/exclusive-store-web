import React, { useMemo } from 'react';
import { ProductCard, type Product } from '@/components/ProductCard/ProductCard';
import { Timer } from '@/components/Timer/Timer';
import { useCountdown } from '@/hooks/useCountdown';
import styles from './FlashSalesSection.module.scss';

import gamepadImg from '@/assets/products/Gamepad.png';
import keyboardImg from '@/assets/products/Keyboard.png';
import monitorImg from '@/assets/products/Monitor.png';
import chairImg from '@/assets/products/Chair.png';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'HAVIT HV-G92 Gamepad',
    image: gamepadImg,
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 5,
    reviewsCount: 88,
  },
  {
    id: '2',
    name: 'AK-900 Wired Keyboard',
    image: keyboardImg,
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviewsCount: 75,
  },
  {
    id: '3',
    name: 'IPS LCD Gaming Monitor',
    image: monitorImg,
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviewsCount: 99,
  },
  {
    id: '4',
    name: 'S-Series Comfort Chair',
    image: chairImg,
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviewsCount: 99,
  },
];

export const FlashSalesSection: React.FC = () => {
  // Задаем конечную дату таймера (например, через 4 дня от текущего времени)
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 4);
    return date;
  }, []);

  // Получаем тикающие значения дней, часов, минут и секунд
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <section className={styles.flashSales}>
      <div className="container">
        <div className={styles.flashSales__top}>
          <div className={styles.flashSales__badge}>
            <div className={styles.flashSales__indicator} />
            <span className={styles.flashSales__subtitle}>Today's</span>
          </div>

          <div className={styles.flashSales__header}>
            <div className={styles.flashSales__titleGroup}>
              <h2 className={styles.flashSales__title}>Flash Sales</h2>
              <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
            </div>

            <div className={styles.flashSales__controls}>
              <button className={styles.flashSales__arrowBtn} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className={styles.flashSales__arrowBtn} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.flashSales__slider}>
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className={styles.flashSales__footer}>
          <button className={styles.flashSales__viewBtn}>View All Products</button>
        </div>
      </div>
    </section>
  );
};