import React from 'react';
import Skill from './bullet';

export default ({ list }) => {
  list = list.map(skill => <Skill content={skill} key={skill} />);

  return (
    <ul>
      { list }
    </ul>
  )
};
