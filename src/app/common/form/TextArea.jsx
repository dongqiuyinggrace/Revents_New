import React from 'react';
import { FormField, Label } from 'semantic-ui-react';
import { useField } from 'formik';

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <textarea {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <Label basic color='red'>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default TextArea;
