import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faAngellist, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './social.module.scss';
import Fade from 'react-reveal/Fade';


class SocialItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { render: false, itemDelay: 0 };
  }

  componentDidMount() {
    const itemDelay = window.screenWidth < 1000 ? 0 : 1000;

    this.setState({ render: false, itemDelay });
  }

  render() {
    const itemDelay = this.state.itemDelay;
    const { site, url, delay } = this.props;

    let icon;

    if (site === 'linkedin') icon = faLinkedin;
    else if (site === 'angel') icon = faAngellist;
    else icon = faGithub;

    return (
      <Fade delay={delay + itemDelay}><li className={styles.item}><a href={url} target="_blank"><FontAwesomeIcon icon={icon} /></a></li></Fade>
    )
  }
}

export default SocialItem;
