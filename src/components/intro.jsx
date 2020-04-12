import React from 'React';
import styles from './landing.module.scss';
import Fade from 'react-reveal/Fade';

export default ({ intro, delay, bigger }) => (
  <Fade delay={!delay ? 0 : delay}>
    <p className={`${styles.intro} ${bigger ? styles.bigger : ''}`}>{intro}</p>
  </Fade>
);
