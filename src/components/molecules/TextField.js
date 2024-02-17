import MUITextField from "@mui/material/TextField";
const { forwardRef } = require("react");

const TextField = forwardRef((props, ref) => (
  <MUITextField {...props} ref={ref} />
));

export default TextField;
