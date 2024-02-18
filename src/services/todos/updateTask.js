import END_POINTS from "../endPoints";
import api from "../api";
import METHODS from "services/methods";

const updateTask = ({ taskId, data }) =>
  api(END_POINTS.task(taskId), {
    method: METHODS.PUT,
    data,
  })
    .then((response) => response)
    .catch((error) => Promise.reject(error));

export default updateTask;
