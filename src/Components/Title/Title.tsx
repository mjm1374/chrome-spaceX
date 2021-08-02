import React from 'react';

import './Title.scss';

type titleprops = {
  value?: string;
};

const Title: React.FC<titleprops> = ({ value }) => {
  return (
    <>
      <h3>{value}</h3>
    </>
  );
};

export default Title;
