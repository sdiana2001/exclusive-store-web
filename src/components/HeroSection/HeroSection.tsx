import React from 'react';
import { PromoBanner } from '@/features/promo-banner/PromoBanner';
import styles from './HeroSection.module.scss';
import { CategoriesSidebar } from '@/features/CategoriesSidebar/CategoriesSidebar';


export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <CategoriesSidebar />
        <div className={styles.hero__bannerWrapper}>
          <PromoBanner />
        </div>
      </div>
    </section>
  )
};