import END_POINTS from "../endPoints";
import api from "../api";
import METHODS from "services/methods";

const createTask = (data) =>
  api(END_POINTS.todos, {
    method: METHODS.POST,
    data,
  })
    .then((response) => response)
    .catch((error) => Promise.reject(error));

export default createTask;
