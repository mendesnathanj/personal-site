import React from "react";
import Layout from '../components/layout';
import Landing from '../components/landing';
import Skills from '../components/skills';
import Fade from 'react-reveal/Fade';
import Navbar from '../components/navbar';
import SocialNav from '../components/social_nav';
import Projects from '../components/projects';
import Experience from '../components/experience_section';
import Contact from '../components/contact_section';

const skillDelay = window.innerHeight > 600 ? 1000 : 0;
const projectDelay = window.innerWidth > 760 && window.innerWidth < 1000 ? 1000 : 0;

export default () => (
  <div>
    <Navbar />
    <SocialNav />
    <Layout>
      <Landing />
      <Fade delay={skillDelay}>
        <Skills />
      </Fade>
      <Fade delay={projectDelay}>
        <Projects/>
      </Fade>
      <Experience />
      <Fade>
        <Contact />
      </Fade>
    </Layout>
  </div>
);
