import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form error={touched && !!error}>
      <textarea
        {...input}
        placeholder={placeholder}
        type={type}
        rows={rows}
      ></textarea>
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form>
  );
};

export default TextArea;
