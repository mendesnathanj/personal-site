import React from 'react';
import styles from './landing.module.scss';
import Fade from 'react-reveal/Fade';


export default ({ email, text, delay }) => (
  <Fade delay={!delay ? 0 : delay}>
    <div className={styles.contactContainer}>
      <a className={styles.contact} rel="noopener" target="_blank" href={`mailto:${email}`}>{text}</a>
    </div>
  </Fade>
);
