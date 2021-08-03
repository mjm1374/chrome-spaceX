import React from 'react';

import './SurveyBox.scss';

type surveyprops = {
  title?: string;
};

const SurveyBox: React.FC<surveyprops> = ({ title, children }) => {
  return (
    <div className="survey">
      <h3>{title}</h3>
      <div className="survey__container">{children}</div>
    </div>
  );
};

export default SurveyBox;
