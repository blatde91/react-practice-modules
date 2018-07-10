import React, { Component } from 'react';
import Avatar from './components/Avatar/Avatar';
import NameAndHandle from './components/NameAndHandle/NameAndHandle';
import Message from './components/Message/Message';
import Time from './components/Time/Time';
import ReplyButton from './components/ReplyButton/ReplyButton';
import RetweetButton from './components/RetweetButton/RetweetButton';
import LikeButton from './components/LikeButton/LikeButton';
import MoreOptionsButton from './components/MoreOptionsButton/MoreOptionsButton';
import './App.css';

class App extends Component {

  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
      {/* The tweetContainer div will contain all of the content*/}
        <div className='tweetContainer'>
          {/* The Avatar component takes a hash that renders a user avatar */}
          <Avatar hash={testTweet.gravatar} /*This is how we pass props down the component tree*//>
          {/* This div will be the container for the rest of the content*/}
          <div className="content">
            {/* The following components render the Message, Time, and Author of the tweet */}
            <NameAndHandle author={testTweet.author}/><Time time={testTweet.timestamp}/>
            <Message text={testTweet.message}/>
            {/* this div will contain all of the button components */}
            <div className="buttons">
              <ReplyButton/>
              <RetweetButton count={testTweet.retweets}/>
              <LikeButton count={testTweet.likes}/>
              <MoreOptionsButton/> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//This dummy data will tell the tweet what to render. Change these fields to see it update in the render
const testTweet = {
  message: "When pizza's on a bagel, you can have pizza anytime",
  gravatar: "24d459ffd22b267c57ea993cef5d6704",
  author: {
    handle: "pizzabaygull",
    name: "Andrea",
  },
  likes: 22,
  retweets: 100,
  timestamp: "2018-06-30 21:24:37"
};

//giving the components this dummy data will allow the nested jsx to render this information as PROPS


export default App;
