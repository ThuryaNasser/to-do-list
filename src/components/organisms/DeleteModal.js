import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Backdrop } from "components/molecules";
import { useState } from "react";
import { deleteTask } from "services";
import { useSnackbar } from "utils/hooks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2.5px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const DeleteModal = ({ taskId, title = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { snackbar } = useSnackbar();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteTask({ taskId });
      handleClose();
      snackbar({ message: "Task deleted successfully" });
    } catch (error) {
      snackbar({
        message: `Something went wrong: ${error.message}`,
        severity: "error",
      });
    }
    setIsLoading(false);
  };

  return (
    <Box>
      <IconButton onClick={handleOpen} aria-label="delete" size="small">
        <DeleteIcon sx={{ color: "error.main" }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Backdrop sx={{ borderRadius: 3 }} open={isLoading} />
          <Typography sx={{ mb: 3 }} variant="h6">
            {title}
          </Typography>
          <Stack direction="row" justifyContent="center" gap={3}>
            <Button sx={{ px: 5 }} onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button
              sx={{
                px: 5,
                backgroundColor: "error.main",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
              variant="contained"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteModal;
