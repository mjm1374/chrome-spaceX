import React from 'react';

import { SLALogo } from '../Images';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="nd-header">
      <img src={SLALogo} alt="Spending Account Service Center" className="nd-logo" />
      <div className="nd-subhead">
        Nondiscrimination Testing Portal
        <hr />
      </div>
    </div>
  );
};

export default Header;
