//This component takes current time as a prop and uses npm package Moment to render how long ago the tweet was
import React from 'react';
import moment from 'moment';
import './Time.css';

const Time = (props) => {
  const timeString = moment(props.time).fromNow();
  return (
      <span className="time">
        {timeString}
      </span>
  )
}

export default Time;