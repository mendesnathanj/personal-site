import React from 'react';
import styles from './landing.module.scss';

export default ({ email, text }) => (
  <div className={styles.contactContainer}>
    <a className={styles.contact} href={`mailto:${email}`}>{text}</a>
  </div>
);
