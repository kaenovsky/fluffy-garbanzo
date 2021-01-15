import React from 'react'

const Tweet = props => (
  <div className={`tweet tweet-${props.direction}`}>
    <div className="tweet-img">
      <img src={props.img} alt="" width="50" />
    </div>
    <div className="tweet-inner">
      <div className="tweet-header">{props.title}</div>
      <div className="tweet-body">{props.text}</div>
      <div className="tweet-footer">
        <span className="icon style3 fa-comment"></span>
        <span className="icon style3 fa-retweet"></span>
        <span className="icon style3 fa-heart"></span>
        {/* fa-upload reemplazado por fa-flash (más divertido) */}
        <span className="icon style3 fa-flash"></span>
      </div>
    </div>
  </div>
)

export default Tweet
