import React from 'react';
import styles from './navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';
import NavItem from './nav_item';


class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { navItems: ['skills', 'projects', 'experience', 'contact'], expanded: false };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({ expanded: false }));
  }

  toggleExpand() {
    if (window)
      if (window.innerWidth < 1000) this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const navItems = this.state.navItems.map((item, i) => <NavItem key={i} content={item} delay={100 * i} toggle={this.toggleExpand} />);
    const navListClass = this.state.expanded ? styles.expanded : '';


    return (
      <div className={styles.navWrapper}>
        <Fade delay={1000}>
          <nav className={styles.navbar}>
            <FontAwesomeIcon icon={faBars} onClick={this.toggleExpand} />
            <ul className={`${styles.navList} ${navListClass}`}>
              {navItems}
            </ul>
          </nav>
        </Fade>
      </div>
    );
  }
};

export default Navbar;
