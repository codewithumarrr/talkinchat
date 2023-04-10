import React from 'react';
import './Header.css';

function Header(props) {
  const { text } = props;

  return (
    <div className="header">
      <h2>{text}</h2>
    </div>
  );
}

export default Header;
