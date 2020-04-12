import React from 'react';
import Projects from './projects';

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { render: false, projectDelay: 0 };
  }

  componentDidMount() {
    const projectDelay = window.innerHeight > 600 && window.innerWidth < 1000 ? 1000 : 0;

    this.setState({ render: true, projectDelay });
  }

  render() {
    if (!this.state.render) return null;

    return <Projects projectDelay={this.state.projectDelay} />
  }
}


export default ProjectSection;
