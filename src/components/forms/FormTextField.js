import { TextField } from "components/molecules";
import React from "react";
import { useController } from "react-hook-form";

const FormTextField = (props) => {
  const { showCharCount, ...rest } = props;

  const { field, fieldState } = useController(rest);
  const { error } = fieldState;

  const hasErrored = Boolean(error);
  const helperText = (() => {
    if (hasErrored) {
      return error?.message;
    }
    if (rest.helperText) {
      return rest.helperText;
    }
    return null;
  })();

  return (
    <TextField
      {...field}
      {...rest}
      error={hasErrored}
      helperText={helperText}
    />
  );
};

export default FormTextField;
