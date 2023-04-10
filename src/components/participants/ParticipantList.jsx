import React from 'react';
import './ParticipantList.css';

function ParticipantList(props) {
  const { participants } = props;

  return (
    <div className="participant-listt">
      <h2>Participants</h2>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>
            <img src={participant.avatar} alt="Avatar" />
            <span>{participant.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
