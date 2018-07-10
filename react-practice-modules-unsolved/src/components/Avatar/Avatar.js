import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
  let url = `https://www.gravatar.com/avatar/${props.hash}`
  return(
      <img
        src={url}
        className='avatar'
        alt="avatar"/>
  );
}

export default Avatar;