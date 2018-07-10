import React from 'react';
import './LikeButton.css';

const LikeButton = (props) => {
    return (
        <span className="like-button">
          <i className="fa fa-heart"/>
          {props.count > 0 &&
            <span className="like-count">
              {props.count}
            </span>}
        </span>
    )
}


export default LikeButton;