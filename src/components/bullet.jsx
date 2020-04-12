import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import styles from './bullet.module.scss';

export default ({ content }) => (
  <li className={styles.bullet}><FontAwesomeIcon icon={faTerminal} />{content}</li>
);
