/*
This component displays the users Twitter username and handle
Edit the code so that it renders the user's twitter name and handle
*/
import React from 'react';
import './NameAndHandle.css';

const NameAndHandle = () => {
    return (
      <span className="name-with-handle">
        <span className="userName"></span>
        <span className="handle">@</span>
      </span>
    );
}

export default NameAndHandle;
