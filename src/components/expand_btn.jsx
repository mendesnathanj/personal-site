import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import styles from './projects.module.scss';

export default ({ expanded, toggle }) => {
  let icon = expanded ? faAngleUp : faAngleDown;

  return (
    <div className={styles.iconContainer} onClick={toggle}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};
