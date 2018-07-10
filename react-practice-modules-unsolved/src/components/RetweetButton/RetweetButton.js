import React from 'react';
import './RetweetButton.css';

const RetweetButton = (props) => {
    function getRetweetCount(count) {
        if (count > 0) {
            return (
                <span className="retweet-count">
                  {props.count}
                </span>
            );
        } else {
            return null;
        }
    }
    return (
        <span className="retweet-button">
          <i className="fa fa-retweet"/>
          {getRetweetCount(props.count)}
        </span>
    )
}


export default RetweetButton;