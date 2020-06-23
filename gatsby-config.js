/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    navItems: ['skills', 'projects', 'experience', 'contact'],
    socialItems: [
      {
        site: 'linkedin',
        url: 'https://www.linkedin.com/in/mendesnathanj/'
      },
      {
        site: 'angel',
        url: 'https://angel.co/u/nathanmendes'
      },
      {
        site: 'github',
        url: 'https://github.com/mendesnathanj'
      },
    ],
    greeting: "Hi I'm",
    landingTitle: 'Nathan Mendes',
    tagline: 'your next full stack software engineer',
    intro: "I'm a CSU Stanislaus graduate with a BS in Computer Science and have been working on a few personal projects to develop my skills in full stack web development.",
    email: 'mendesnathanj@gmail.com',
    contactText: 'contact',
    skills: { languages: ['Ruby', 'JavaScript', 'HTML5', '(S)CSS'],
              libraries: [ 'React.js', 'Redux', 'Ruby on Rails', 'jQuery']
    },
    skillsDescription: 'My most recent projects have utilized a variety of languages and technologies such as...',
    projects: [
      {
        title: 'Crunchyroll Single Page App Clone',
        github: 'https://github.com/mendesnathanj/uwuwoll',
        live: 'https://uwuwoll.herokuapp.com/',
        stack: ['Ruby on Rails', 'React.js', 'Redux', 'AWS'],
        description: 'A clone of a popular anime streaming website',
        bullets: [
          'Implemented DRY principles to compose React components that were single-purposed and reusable in order to keep codebase small and readable',
          'Optimize page load times by populating Redux store with key relevant data to improve speeds when navigating web pages to reduce the need for AJAX requests',
          'Utilize friendly_id gem to use slugs rather than ids to find relevant active record models when traversing website to keep urls legible and easily shareable',
          'Configured application with Active Storage and AWS S3 buckets for serving static media content',
          'Optimized database usage by eliminating N+1 queries within Active Record associations',
          'Built full user authentication for signup/login using BCrypt',
        ]
      },
      {
        title: 'Airport Advisor',
        github: 'https://github.com/mendesnathanj/airport-advisor',
        live: 'http://airport-advisor.herokuapp.com/',
        stack: ['MongoDB', 'Express', 'React.js', 'Redux', 'Node'],
        description: "A website for reviewing airports you’ve been to",
        bullets: [
          'Implement Fuse.js library to implement fuzzy searching for airport searching which allows a user to misspell an airport’s name and still be able to find a relevant result',
          'Used Passport.js, JWT tokens, and BCrypt libraries to implement secure user login and signup',
          'Designed single multi-purposed modal that generated appropriate form depending on the form type that was needed to reduce need for multiple web pages and allowed for smoother user experience',
          'Oversaw a small team by delegating project goals that allowed for individual autonomy, group coordination and allowed for myself to assist with direction and debugging',
        ]
      },
      {
        title: 'Memory Crossing',
        github: 'https://github.com/mendesnathanj/memory-crossing',
        live: 'https://mendesnathanj.github.io/memory-crossing/',
        stack: ['vanilla JS'],
        description: 'A small memory puzzle for all ages themed on Animal Crossing',
        bullets: [
          'Developed a 2D puzzle pair flipping game by employing DOM manipulation using vanilla JavaScript',
          'Utilized webpack for loading large amount of assets and customized webpack configuration for custom build output',
          'Created streak system to encourage players to challenge themselves by memorizing more at once before flipping tiles over'
        ]
      },
      {
        title: 'My Personal Website',
        github: 'https://github.com/mendesnathanj/personal-site',
        live: 'http://nathanmendes.com/',
        stack: ['Gatsby.js', 'React', 'React-Reveal'],
        description: 'My personal portfolio website',
        bullets: [
          'Utilize Gatsby.js to create a fast and optimized static website',
          'Utilize react-reveal components for easy and seamless animations that play as the user scrolls through the page',
        ]
      },
    ],
    experienceIntro: "My experience so far...",
    jobExperience: [
      {
        role: "Full Stack Developer Intern",
        company: "CTS West",
        date: "Sep. 2018 - Feb. 2019",
        bullets: [
          "Applied OpenALPR API, vanilla JS and jQuery to integrate license plate recognition features for main web application.",
        ]
      },
      {
        role: "Technical SSD Intern",
        company: "Intel Corp.",
        date: "Jun. 2017 - Jan. 2018",
        bullets: [
          "Created Python scripts for frictionless, bug-free SSD firmware updates to produce quality SSDs ready for shipment within a few days of customer request.",
        ]
      },
      {
        role: "Desktop Technician",
        company: "Randstad Tech.",
        date: "May. 2019 - Dec. 2019",
        bullets: [
          "Deploy and refurbish new computer systems in hospitals throughout San Francisco Bay Area locations.",
        ]
      },
    ],
    contactHeader: "Let's Get In Touch",
    contactContent: "I'm currently seeking job opportunities so if you've found my experience relevant to your needs, let's have a chat!",
    contactBtnText: "email"
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'nathanmendes.com',
        acl: null,
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
