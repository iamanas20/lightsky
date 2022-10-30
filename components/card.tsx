import React from 'react';
import styles from '../styles/card.module.scss';

export function Card(
  {
    children,
    className
  }: {
    children: React.ReactNode;
    className?: string;
  }
) {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      {children}
    </div>
  )
}