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
        <div className='tweetContainer'>
          <Avatar hash={testTweet.gravatar}/>
          <div className="content">
            <NameAndHandle author={testTweet.author}/><Time time={testTweet.timestamp}/>
            <Message text={testTweet.message}/>
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

const testTweet = {
  message: "When pizza's on a bagel, you can have pizza anytime",
  gravatar: "24d459ffd22b267c57ea993cef5d6704",
  author: {
    handle: "pizzabaygull",
    name: "Andrea"
  },
  likes: 22,
  retweets: 100,
  timestamp: "2018-06-30 21:24:37"
};


export default App;
