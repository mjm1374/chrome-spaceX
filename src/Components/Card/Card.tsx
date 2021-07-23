import React from 'react';

import Header from '../Header/Header';

import './Card.scss';

type CardProps = {
  title?: string;
  className?: string;
  step?: string;
  button?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="nd-card">{children}</div>;
};

export default Card;
