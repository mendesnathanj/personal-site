import React from 'react';
import Bullet from './bullet';
import bulletStyles from './bullet.module.scss';
import styles from './experiences.module.scss';
import Fade from 'react-reveal/Fade';


export default ({ experience }) => {
  const bullets = experience.bullets.map((bullet, i) => <Bullet key={i} content={bullet} />);


  return (
    <Fade>
      <div className={bulletStyles.experiencesContainer}>
        <div className={styles.header}>
          <span className={styles.role}>{`${experience.role} @ ${experience.company}`}</span>
          <span className={styles.date}>{experience.date}</span>
        </div>
        {bullets}
      </div>
    </Fade>
  );
};
