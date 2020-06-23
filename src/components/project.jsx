import React from 'react';
import styles from './projects.module.scss';
import bulletStyles from './bullet.module.scss';
import Bullet from './bullet';
import ExpandBtn from './expand_btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';


class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { project, delay } = this.props;
    const expandClass = this.state.expanded ? styles.expand : '';
    const stack = project.stack.join(', ');
    const bullets = project.bullets.map((content, i) => <Bullet key={i} content={content} />);
    const expandBtn = bullets.length > 2 ? <ExpandBtn toggle={this.toggleExpand} expanded={this.state.expanded} /> : null;

    return (
      <Fade delay={delay}>
        <div className={styles.projectContainer}>
          <div className={styles.links}>
            <a className={styles.link} rel="noopener" target="_blank" href={project.github}><FontAwesomeIcon icon={faGithub} /></a>
            <a className={styles.link} rel="noopener" target="_blank" href={project.live}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
          </div>
          <div className={`${styles.project} ${expandClass}`}>
            <h3 className={styles.title}>{project.title}</h3>
            <span className={styles.stack}>{stack}</span>
            <p className={styles.description}>{project.description}</p>
            <ul className={bulletStyles.bulletContainer}>
              {bullets}
            </ul>
            {expandBtn}
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
