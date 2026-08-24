import React from 'react';
import styles from './CategoriesSidebar.module.scss';

const categories = [
  { name: "Woman's Fashion", hasSubcategories: true },
  { name: "Men's Fashion", hasSubcategories: true },
  { name: "Electronics", hasSubcategories: false },
  { name: "Home & Lifestyle", hasSubcategories: false },
  { name: "Medicine", hasSubcategories: false },
  { name: "Sports & Outdoor", hasSubcategories: false },
  { name: "Baby's & Toys", hasSubcategories: false },
  { name: "Groceries & Pets", hasSubcategories: false },
  { name: "Health & Beauty", hasSubcategories: false },
];

export const CategoriesSidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar__list}>

        {categories.map((item, index) => (
          <li key={index} className={styles.sidebar__item}>
            <span>{item.name}</span>

            {item.hasSubcategories && (
              <span className={styles.sidebar__arrow}>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1.5 1.5L6.5 6.5L1.5 11.5" />
                </svg>
              </span> )}
          </li>
        ))}

        
      </ul>
    </aside>
  );
};