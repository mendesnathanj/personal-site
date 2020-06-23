import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './navbar.module.scss';

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { render: false, itemDelay: 0 };
  }

  componentDidMount() {
    const itemDelay = window.innerWidth < 1000 ? 0 : 1000;

    this.setState({
      render: true,
      itemDelay
    })
  }

  render() {
    if (!this.state.render) return null;

    const { content, delay, toggle } = this.props;
    const itemDelay = this.state.itemDelay;

    return (
      <Fade delay={delay + itemDelay}>
        <li><a onClick={toggle} rel="noopener" className={styles.navItem} href={`#${content}`}>{content}</a></li>
      </Fade>
    )
  }
}

export default NavItem;
