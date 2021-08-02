/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';
import TextError from '../TextError';

import styles from '../Form.module.scss';

export interface OptionsProps {
  key: string;
  value: string;
}
export interface CheckboxProps {
  label: string;
  name: string;
  options: Array<OptionsProps>;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, options }) => {
  return (
    <div className="form-control">
      <p>
        <label htmlFor="{name}">{label}</label>
      </p>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            const uniqueIdentifier = `input-${option.value.replace(' ', '-').toLowerCase()}`;
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  className={classNames(styles.input)}
                  id={uniqueIdentifier}
                  {...field}
                  value={option.value}
                  //   checke={field.value === option.value}
                />
                <label htmlFor={uniqueIdentifier}>{option.key}</label>
                <br />
              </React.Fragment>
            );
          });
        }}
      </Field>
      {/* <ErrorMessage name={name} component={TextError} /> */}
    </div>
  );
};
export default Checkbox;
