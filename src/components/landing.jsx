import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './animations.scss';
import styles from './landing.module.scss';
import Greeting from './greeting';
import Title from './title';
import Tagline from './tagline';
import Intro from './intro';
import ContactBtn from './contact_btn';


export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            greeting,
            landingTitle,
            tagline,
            intro,
            contactText,
            email
          }
        }
      }
    `
  ).site.siteMetadata;

  return (
    <div className={`fadeIn ${styles.landing}`}>
      <Greeting text={data.greeting} />
      <Title title={data.landingTitle} />
      <Tagline tagline={data.tagline} />
      <Intro intro={data.intro} />
      <ContactBtn email={data.email} text={data.contactText} />
    </div>
  );
};
