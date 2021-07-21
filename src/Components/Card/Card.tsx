import React from 'react';

import Header from '../Header/Header';

import './Card.scss';

const Card: React.FC = () => {
  return (
    <div className="nd-card">
      <Header />
      <br />
      Hello world card!
    </div>
  );
};

export default Card;
