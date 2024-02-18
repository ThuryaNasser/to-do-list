import { Stack } from "@mui/material";
import { TaskForm } from "components/molecules";
import { Page, SuspenseLoader } from "components/render";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTask, updateTask as updateTaskService } from "services";

const EditTask = () => {
  const { taskId } = useParams();
  const [taskDetails, setTaskDetails] = useState({});

  useEffect(() => {
    const getTodosList = async () => {
      const response = await getTask({ taskId });
      setTaskDetails(response);
    };
    getTodosList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTask = async (payload) => {
    await updateTaskService({ taskId, data: payload });
  };

  return (
    <Page title={taskId}>
      <Stack sx={{ gap: 3 }}>
        {Object.keys(taskDetails).length > 0 ? (
          <TaskForm
            title={taskDetails?.title}
            completed={taskDetails?.completed}
            onSubmitService={updateTask}
            snackbarMessage="Task updated successfully"
          />
        ) : (
          <SuspenseLoader />
        )}
      </Stack>
    </Page>
  );
};

export default EditTask;
