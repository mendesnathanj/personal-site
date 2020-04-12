import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SocialItem from './social_item';
import Fade from 'react-reveal/Fade';
import styles from './social.module.scss';

export default () => {
  let links = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            socialItems { site, url }
          }
        }
      }
    `
  ).site.siteMetadata.socialItems;

  links = links.map((link, i) => <SocialItem key={i} site={link.site} url={link.url} delay={100 * i} />);

  return (
    <Fade delay={1000}>
    <div className={styles.socialWrapper}>
      <ul className={styles.socialNav}>
        {links}
      </ul>
    </div>
    </Fade>
  )
};
