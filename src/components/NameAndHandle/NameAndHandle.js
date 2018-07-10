import React from 'react';
import './NameAndHandle.css';

const NameAndHandle = (props) => {
    return (
      <span className="name-with-handle">
        <span className="userName">{props.author.name}</span>
        <span className="handle">@{props.author.handle}</span>
      </span>
    );
}

export default NameAndHandle;