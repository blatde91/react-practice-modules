//This component displays the users Twitter username and handle
import React from 'react';
import './NameAndHandle.css';

//Edit the code to see the user's name and twitter handle?

const NameAndHandle = () => {
    return (
      <span className="name-with-handle">
        <span className="userName"></span>
        <span className="handle">@</span>
      </span>
    );
}

export default NameAndHandle;