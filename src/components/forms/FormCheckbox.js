import { useController } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";

import { Checkbox } from "components/molecules";

const FormCheckbox = (props) => {
  const { checkboxProps = {}, ...rest } = props;

  const { field, fieldState } = useController(rest);
  const { error } = fieldState;

  const hasErrored = Boolean(error);

  return (
    <FormControl error={hasErrored}>
      <Checkbox
        labelProps={rest}
        checkboxProps={{
          ...field,
          checked: field.value,
          ...checkboxProps,
        }}
      />
      {hasErrored && <FormHelperText>{error?.message}</FormHelperText>}
    </FormControl>
  );
};

export default FormCheckbox;
