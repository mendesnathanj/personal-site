import React from 'react';
import Flip from 'react-reveal/Flip';
import styles from './landing.module.scss';

export default ({ text }) => (
  <Flip bottom delay={1000}>
    <h2 className={styles.greeting}>{text}</h2>
  </Flip>
);
