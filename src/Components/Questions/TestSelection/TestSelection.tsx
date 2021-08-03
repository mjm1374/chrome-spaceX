/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../../Form';
import Checkbox from '../../Form/Checkbox/Checkbox';
import Button from '../../Button/Button';

import './TestSelection.scss';

const TestSelect: React.FC = () => {
  const [selectedTests, setSelectTest] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();
  const startTest = (): void => {
    const path = 'ndtest2';
    history.push(path);
  };

  const checkboxOptions = [
    { key: 'Premium Conversion (Section 125)', value: '125' },
    { key: 'Healthcare Spending Account (Section 105)', value: '105' },
    { key: 'Dependent Care Spending Account (Section 129)', value: '129' },
  ];

  const initialValues = {
    testSelect: [],
  };

  const onSubmit = (e): void => {
    if (e.testSelect.length === 0) {
      setErrorMsg(() => 'Please select a product to continue.');
    } else {
      setErrorMsg(() => '');
      startTest();
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
