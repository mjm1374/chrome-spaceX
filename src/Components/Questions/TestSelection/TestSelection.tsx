/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Form } from '../../Form';
import Checkbox from '../../Form/Checkbox/Checkbox';
import Button from '../../Button/Button';

import './TestSelection.scss';

const TestSelect: React.FC = () => {
  const [selectedTests, setSelectTest] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const checkboxOptions = [
    { key: 'Premium Conversion (Section 125)', value: '125' },
    { key: 'Healthcare Spending Account (Section 105)', value: '105' },
    { key: 'Dependent Care Spending Account (Section 129)', value: '129' },
  ];

  const validationSchema = Yup.object({
    checkboxOptions: Yup.array().required('Please select a product to continue.'),
  });

  const initialValues = {
    testSelect: [],
  };

  const onSubmit = (e): void => {
    console.log(e);
    if (e.testSelect.length === 0) {
      console.log('No results');
    }
    setSelectTest(() => [...e.testSelect]);
    return null;
  };

  const listItems = selectedTests.map((number) => <li key={number}>{number}</li>);
  return (
    <div className="test-select">
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <div className="test-select__wrapper">
          <Checkbox
            name="testSelect"
            label="Please Select the Nondiscrimination tests you would like to perform"
            options={checkboxOptions}
          />
          <div className="test-select__error">{errorMsg}</div>
        </div>
        <div className="test-select__buttons">
          <Button type="submit" variant="blue">
            Next
          </Button>
          <br />
        </div>
        <ul>{listItems}</ul>
      </Form>
    </div>
  );
};

export default TestSelect;
