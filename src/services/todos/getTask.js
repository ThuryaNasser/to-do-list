import END_POINTS from "../endPoints";
import api from "../api";

const getTask = ({ taskId }) =>
  api(END_POINTS.task(taskId))
    .then((response) => response)
    .catch((error) => Promise.reject(error));

export default getTask;
