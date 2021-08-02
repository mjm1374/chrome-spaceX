import React from 'react';

export interface textErrorProps {
  name: string;
}
const TextError: React.FC<textErrorProps> = (props) => {
  return <div className="error">Error</div>;
};

export default TextError;
