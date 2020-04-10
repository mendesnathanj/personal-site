import React from 'React';
import styles from './landing.module.scss';

export default ({ intro }) => (
  <p className={styles.intro}>{intro}</p>
)
