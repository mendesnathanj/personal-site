import React from 'react';
import Experience from './experience';

export default ({ experiences }) => {

  experiences = experiences.map((experience, i) => <Experience key={i} experience={experience} />);

  return (
    <ul>
      { experiences }
    </ul>
  )

};
