import React from 'react';
import './LeftRoomButton.css';

function LeftRoomButton(props) {
  const { onClick } = props;

  return (
    <button className="left-room-button" onClick={onClick}>
      Leave Room
    </button>
  );
}

export default LeftRoomButton;
