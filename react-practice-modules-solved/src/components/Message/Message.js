import React from 'react';
//What needs to be added to have the Message component render the text of the message?
const Message = (props) => {
    return (
      <div className="message">
        {props.message}
      </div>

    )
}

export default Message;