import React, { useState } from 'react';
import './ChatWindow.css';
import LeftRowChat from './leftrow/LeftRowChat';
import RightRowChat from './rightrow/RightRowChat';
import LeftRoomButton from './leaveroom/LeftRoomButton';
import ParticipantList from './participants/ParticipantList';
import { users } from '../users';
import Header from './header/Header';

function ChatWindow() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: message }]);
      setMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-window">
      <div className="participant-list">
        <LeftRoomButton />
        {/* Participants list goes here */}
        <ParticipantList participants={users}/>
      </div>
      <div className="chat-area">
        <Header text="England" />
        <div className="message-list">
          <LeftRowChat avatar={'//picsum.com/200'} message={"hi thereAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}/>
          <RightRowChat avatar={'//picsum.com/200'} message={"hello there"}/>
          <LeftRowChat avatar={'//picsum.com/200'} message={"hi there"}/>
          <RightRowChat avatar={'//picsum.com/200'} message={"hello there"}/>
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
