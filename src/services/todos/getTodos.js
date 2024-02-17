import END_POINTS from "../endPoints";
import api from "../api";

const getTodos = ({ searchValue }) =>
  api(END_POINTS.todos, {
    searchOptions: { title: searchValue },
  })
    .then((response) => response)
    .catch((error) => Promise.reject(error));

export default getTodos;
