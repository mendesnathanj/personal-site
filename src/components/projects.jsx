import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './projects.module.scss';
import Project from './project';
import ProjectsColumn from './projects_column';

const projectDelay = window.innerHeight > 600 && window.innerWidth < 1000 ? 1000 : 0;

export default () => {
  let projects = useStaticQuery(
    graphql`
      query {
          site {
            siteMetadata {
              projects { title, github, live, stack, description, bullets }
            }
          }
        }
    `
  ).site.siteMetadata.projects;

  let columns = [[], []];

  projects.forEach((project, i) => {
    if (i === 0) columns[0].push(<Project key={i} project={project} delay={projectDelay} />);
    else if (i % 2 === 0) {
      columns[0].push(<Project key={i} project={project} delay={0} />);
    } else {
      columns[1].push(<Project key={i} project={project} delay={0} />);
    }
  })

  columns = columns.map((projects, i) => <ProjectsColumn key={i} projects={projects} />);


  return (
    <div className={styles.projectsContainer}>
      <span id="projects" className={styles.offset}></span>
      { columns }
    </div>
  );
};
