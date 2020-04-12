import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './skills.module.scss';
import SkillList from './skill_list';
import Fade from 'react-reveal/Fade';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            skills { languages, libraries },
            skillsDescription
          }
        }
      }
    `
  ).site.siteMetadata;

  return (
    <div className={styles.skillsSection}>
      <span id="skills" className={styles.offset}></span>
      <p className={styles.description}>{data.skillsDescription}</p>
      <Fade cascade bottom delay={1000}>
      <div className={styles.skillsContainer}>
        <SkillList list={data.skills.languages} />
        <SkillList list={data.skills.libraries} />
      </div>
      </Fade>
    </div>
  )
};
