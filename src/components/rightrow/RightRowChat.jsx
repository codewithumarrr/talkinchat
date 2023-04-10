import React from 'react';
import './RightRowChat.css';

function RightRowChat(props) {
  const { avatar, message } = props;

  return (
    <div className="right-row-chat">
      <img src={avatar} alt="Avatar" />
      <div className="message-bubble">{message}</div>
    </div>
  );
}

export default RightRowChat;
