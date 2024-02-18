import CircularProgress from "@mui/material/CircularProgress";
import MUIBackdrop from "@mui/material/Backdrop";

const Backdrop = ({ open = false, sx = {} }) => (
  <MUIBackdrop
    sx={{
      color: "secondary.main",
      zIndex: (theme) => theme.zIndex.drawer + 1,
      ...sx,
    }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </MUIBackdrop>
);

export default Backdrop;
