//This component Renders the like button and the number of likes
import React from 'react';
import './LikeButton.css';

const LikeButton = (props) => {
    return (
        <span className="like-button">
          <i className="fa fa-heart"/>
          {/*How would props be passed here to only render when there are more than 0 likes?*/}

        </span>
    )
}


export default LikeButton;