import React from 'react';
import styles from './projects.module.scss';

export default ({ projects }) => {
  return (
    <div className={styles.projectColumn}>
      {projects}
    </div>
  );
};
