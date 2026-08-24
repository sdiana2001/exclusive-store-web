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

  const timeUnits = [
    { label: 'Days', value: pad(days) },
    { label: 'Hours', value: pad(hours) },
    { label: 'Minutes', value: pad(minutes) },
    { label: 'Seconds', value: pad(seconds) },
  ];

  return (
    <div className={styles.timer}>
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className={styles.timer__item}>
            <span className={styles.timer__label}>{unit.label}</span>
            <span className={styles.timer__value}>{unit.value}</span>
          </div>

          {index < timeUnits.length - 1 && (
            <div className={styles.timer__dots}>
              <span />
              <span />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};