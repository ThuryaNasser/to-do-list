import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';
import { forwardRef } from 'react';

const Checkbox = forwardRef((props, ref) => {
  const { labelProps, checkboxProps } = props;

  return (
    <FormControlLabel
      {...labelProps}
      control={(
        <MUICheckbox
          {...checkboxProps}
          inputRef={ref}
        />
      )}
    />
  );
});

export default Checkbox;
