import React from "react";
import { Form, Label } from "semantic-ui-react";
import DataPicler from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DataInput = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <DataPicler
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DataInput;
