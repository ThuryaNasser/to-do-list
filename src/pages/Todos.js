import { Add } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SearchBar } from "components/molecules";
import { TodosList } from "components/organisms";
import { Page } from "components/render";
import SuspenseLoader from "components/render/SuspenseLoader";
import { useEffect, useState } from "react";
import { getTodos } from "services";
import { Link } from "react-router-dom";
import { PATHS } from "routes";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTodosList = async () => {
      setIsLoading(true);
      const response = await getTodos({
        searchValue: searchInput,
      });
      setTodos(response);
      setIsLoading(false);
    };
    getTodosList();
  }, [searchInput]);

  return (
    <Page title="Todos">
      <Stack sx={{ textAlign: "center", gap: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: { xs: "center", md: "space-between" },
            columnGap: 2,
            rowGap: 4,
            px: 1,
          }}
        >
          <SearchBar setSearchInput={setSearchInput} />
          <Button
            component={Link}
            to={`/${PATHS.createTask}`}
            size="small"
            variant="contained"
            startIcon={<Add />}
          >
            <Typography sx={{ pt: 0.5, width: 100 }}>Add Task</Typography>
          </Button>
        </Box>
        {isLoading ? <SuspenseLoader /> : <TodosList todos={todos} />}
      </Stack>
    </Page>
  );
};

export default Todos;
