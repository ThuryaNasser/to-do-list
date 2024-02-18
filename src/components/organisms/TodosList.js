import { Stack } from "@mui/material";
import { Pagination } from "components/molecules";
import { useState } from "react";
import TodoCard from "./TodoCard";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const TODOS_PER_PAGE = 10;

const TodosList = ({ todos = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const isEmptyTodos = todos.length === 0;
  const indexOfLastTodo = currentPage * TODOS_PER_PAGE;
  const indexOfFirstTodo = indexOfLastTodo - TODOS_PER_PAGE;
  const currentTodos = todos?.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <Stack
      sx={{
        textAlign: "center",
        gap: 3,
        backgroundColor: "secondary.main",
        p: 2,
        borderRadius: 2,
      }}
    >
      {currentTodos?.map(({ id, title, completed }) => (
        <TodoCard key={id} id={id} title={title} completed={completed} />
      ))}
      {isEmptyTodos ? (
        <Stack gap={1} alignItems="center">
          <SearchOffIcon /> No Result Found
        </Stack>
      ) : (
        <Pagination
          totalItems={todos.length}
          onPageChange={(value) => setCurrentPage(value)}
        />
      )}
    </Stack>
  );
};

export default TodosList;
