import EditIcon from "@mui/icons-material/Edit";
import { Box, Card, Checkbox, IconButton, Typography } from "@mui/material";
import { DeleteModal } from "components/organisms";
import { Link } from "react-router-dom";

const TodoCard = ({ id, title = "", completed = false }) => {
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
        <Checkbox checked={completed} sx={{ pointerEvents: "none" }} />
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
        <DeleteModal
          taskId={id}
          title={`Are you sure you want to delete ${title} ?`}
        />
        <IconButton
          component={Link}
          to={`/${id}`}
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
