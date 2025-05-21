import React from "react";
import { Formik, Form } from "formik";

const FormikForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => (
        <Form>
          {typeof children === 'function' ? children(formikProps) : children}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
