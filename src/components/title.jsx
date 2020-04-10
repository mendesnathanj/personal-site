import React from 'react';
import styles from './landing.module.scss';
import 'animate.css/animate.min.css';
import Fade from 'react-reveal/Fade';


export default ({ title }) => (
  <Fade right cascade>
    <h1 className={styles.title}>{ title }</h1>
  </Fade>
);
