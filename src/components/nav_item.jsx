import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './navbar.module.scss';

const itemDelay = window.screenWidth < 1000 ? 0 : 1000;

export default ({ content, delay, toggle }) => (
  <Fade delay={delay + itemDelay}>
    <li><a onClick={toggle} className={styles.navItem} href={`#${content}`}>{content}</a></li>
  </Fade>
);
