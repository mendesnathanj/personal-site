import React from "react";
import Layout from '../components/layout';
import Landing from '../components/landing';
import Skills from '../components/skills';
import Fade from 'react-reveal/Fade';
import Navbar from '../components/navbar';
import SocialNav from '../components/social_nav';
import ProjectSection from '../components/projects_section';
import Experience from '../components/experience_section';
import Contact from '../components/contact_section';



class Index extends React.Component {
  constructor() {
    super();

    this.state = { render: false, skillDelay: 0, projectDelay: 0 };
  }

  componentDidMount() {
    const skillDelay = window.innerHeight > 600 ? 1000 : 0;
    const projectDelay = window.innerWidth > 760 && window.innerWidth < 1000 ? 1000 : 0;

    this.setState({ render: true, skillDelay, projectDelay });
  }

  render() {
    if (!this.state.render) return null;

    const { skillDelay, projectDelay } = this.state;

    return (
      <div>
        <Navbar />
        <SocialNav />
        <Layout>
          <Landing />
          <Fade delay={skillDelay}>
            <Skills />
          </Fade>
          <Fade delay={projectDelay}>
            <ProjectSection />
          </Fade>
          <Experience />
          <Fade>
            <Contact />
          </Fade>
        </Layout>
      </div>
    )
  }
}

export default Index;
