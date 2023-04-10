import React from 'react';
import './LeftRowChat.css';

function LeftRowChat(props) {
  const { avatar, message } = props;

  return (
    <div className="left-row-chat">
      <img src={avatar} alt="Avatar" />
      <div className="message-bubble-left">{message}</div>
    </div>
  );
}

export default LeftRowChat;
