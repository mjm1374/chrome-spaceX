import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormikHelpers } from 'formik';

import Card from '../../Components/Card/Card';

import Header from '../../Components/Header/Header';
import Page from '../../Components/Page/Page';
import Title from '../../Components/Title/Title';
import SurveyBox from '../../Components/SurveyBox/SurveyBox';
import TestSelect from '../../Components/Questions/TestSelection/TestSelection';

const Test: React.FC = () => {
  const [survey, setSurvey] = useState('');
  return (
    <Page>
      <Card>
        <Header />
        <br />
        <Title value="test Selction" />
        <SurveyBox title="Nondiscrimination Test">
          <TestSelect />
        </SurveyBox>
      </Card>
    </Page>
  );
};

export default Test;
