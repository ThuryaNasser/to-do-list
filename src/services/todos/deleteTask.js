import END_POINTS from "../endPoints";
import api from "../api";
import METHODS from "services/methods";

const deleteTask = ({ taskId }) =>
  api(END_POINTS.task(taskId), {
    method: METHODS.DELETE,
  })
    .then((response) => response)
    .catch((error) => Promise.reject(error));

export default deleteTask;
