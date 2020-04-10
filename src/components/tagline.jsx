import React from 'react';
import styles from './landing.module.scss';
import Fade from 'react-reveal/Fade';

export default ({ tagline }) => (
  <Fade delay={1000}>
    <h2 className={styles.tagline}>{ tagline }</h2>
  </Fade>
);
