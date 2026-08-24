import React from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => {
  const pad = (num: number) => String(num).padStart(2, '0');

  return (
    <div className={styles.timer}>
      <div className={styles.timer__item}>
        <span className={styles.timer__label}>Days</span>
        <span className={styles.timer__value}>{pad(days)}</span>
      </div>

      <div className={styles.timer__dots}>
        <span />
        <span />
      </div>

      <div className={styles.timer__item}>
        <span className={styles.timer__label}>Hours</span>
        <span className={styles.timer__value}>{pad(hours)}</span>
      </div>

      <div className={styles.timer__dots}>
        <span />
        <span />
      </div>

      <div className={styles.timer__item}>
        <span className={styles.timer__label}>Minutes</span>
        <span className={styles.timer__value}>{pad(minutes)}</span>
      </div>

      <div className={styles.timer__dots}>
        <span />
        <span />
      </div>

      <div className={styles.timer__item}>
        <span className={styles.timer__label}>Seconds</span>
        <span className={styles.timer__value}>{pad(seconds)}</span>
      </div>
    </div>
  );
};