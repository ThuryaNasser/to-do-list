import { Stack } from "@mui/material";
import { TaskForm } from "components/molecules";
import { Page } from "components/render";
import { createTask as createTaskService } from "services";

const CreateTask = () => {
  const createTask = async (payload) => {
    await createTaskService(payload);
  };

  return (
    <Page title="New Task">
      <Stack sx={{ gap: 3 }}>
        <TaskForm
          onSubmitService={createTask}
          snackbarMessage="Task created successfully"
        />
      </Stack>
    </Page>
  );
};

export default CreateTask;
