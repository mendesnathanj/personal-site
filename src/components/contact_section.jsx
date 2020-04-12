import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './contact_header';
import Content from './contact_content';
import Btn from './contact_btn';
import styles from './contact.module.scss';

export default () => {
  const { email, contactHeader, contactContent, contactBtnText } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email, contactHeader, contactContent, contactBtnText
          }
        }
      }
    `
  ).site.siteMetadata;


  return (
    <div id="contact" className={styles.contactSectionContainer}>
      <Header content={contactHeader} />
      <Content content={contactContent} />
      <Btn text={contactBtnText} email={email} />
    </div>
  )
};
