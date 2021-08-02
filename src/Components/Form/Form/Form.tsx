import React from 'react';
import { Formik, Form } from 'formik';
import { AnySchema } from 'yup';

import styles from '../Form.module.scss';

type InitialValuesList = Record<string, unknown>;

export interface FormProps {
  layout?: string;
  initialValues: InitialValuesList;
  validationSchema?: AnySchema;
  onSubmit: (values, { setSubmitting }) => void;
}

const FormWrapper: React.FC<FormProps> = ({
  layout = 'default',
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    <Form className={styles.form}>
      {layout === 'inline' ? children : <fieldset>{children}</fieldset>}
    </Form>
  </Formik>
);

export default FormWrapper;
