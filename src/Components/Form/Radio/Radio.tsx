import React from 'react';
import { Field, FieldProps } from 'formik';
import classNames from 'classnames';

// import { FieldValid, FieldInvalid } from 'components/Images';

import styles from '../Form.module.scss';

export interface RadioProps {
  name: string;
  placeholder?: string;
}

const RadioField: React.FC<FieldProps> = ({ field, form: { touched, errors } }) => {
  const hasTouched = touched[field.name];
  const hasError = hasTouched && errors[field.name];

  return (
    <>
      <div className={styles.inputWrapper}>
        <input
          type="radio"
          className={classNames(styles.input, {
            [styles.inputError]: hasError,
          })}
          //   {...field}
        />
        {hasTouched && <div className={styles.icon}>{hasError ? 'bad' : 'good'}</div>}
      </div>

      {hasError && <p className={styles.error}>{errors[field.name]}</p>}
    </>
  );
};

const Radio: React.FC<RadioProps> = ({ name, placeholder }) => {
  const uniqueIdentifier = `input-${name.replace(' ', '-').toLowerCase()}`;

  const camilize = (str: string): string =>
    str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) {
        return ''; // or if (/\s+/.test(match)) for white spaces
      }

      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });

  return (
    <div className={classNames('mb-2', styles.wrapper)}>
      <label htmlFor={uniqueIdentifier} className={styles.label}>
        {name}
      </label>
      <Field
        id={uniqueIdentifier}
        name={camilize(name)}
        placeholder={placeholder}
        component={RadioField}
      />
    </div>
  );
};

export default Radio;
