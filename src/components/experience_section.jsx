import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Intro from './intro';
import styles from './experiences.module.scss';
import Experiences from './experiences';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            experienceIntro,
            jobExperience { role, company, date, bullets }
          }
        }
      }
    `
  ).site.siteMetadata;

  return (
    <div className={styles.experienceContainer}>
      <span id="experience" className={styles.offset}></span>
      <Intro intro={data.experienceIntro} bigger={true} />
      <Experiences experiences={data.jobExperience} />
    </div>
  );
};
