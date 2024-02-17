import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Card, Checkbox, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TodoCard = ({
  title = "",
  completed = false,
}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Checkbox
          checked={completed}
          sx={{ pointerEvents: "none" }}
        />
        <Typography
          variant="h6"
          sx={{ textDecoration: completed ? "line-through" : "" }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <IconButton aria-label="delete" size="small">
          <DeleteIcon sx={{ color: "error.main" }} />
        </IconButton>
        <IconButton
          component={Link}
          to={`/${title}`}
          aria-label="edit"
          size="small"
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default TodoCard;
