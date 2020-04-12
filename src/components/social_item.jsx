import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faAngellist, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './social.module.scss';
import Fade from 'react-reveal/Fade';

const itemDelay = window.screenWidth < 1000 ? 0 : 1000;

export default ({ site, url, delay }) => {
  let icon;

  if (site === 'linkedin') icon = faLinkedin;
  else if (site === 'angel') icon = faAngellist;
  else icon = faGithub;

  return (
    <Fade delay={delay + itemDelay}><li className={styles.item}><a href={url} target="_blank"><FontAwesomeIcon icon={icon} /></a></li></Fade>
  )
};
