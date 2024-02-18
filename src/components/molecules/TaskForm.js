import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Card, Checkbox, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "utils/hooks";
import * as Yup from "yup";

const TaskForm = ({
  title = "",
  completed = false,
  snackbarMessage = "",
  onSubmitService,
}) => {
  const navigate = useNavigate();
  const { snackbar } = useSnackbar();

  const onSubmit = async (values) => {
    try {
      await onSubmitService(values);
      snackbar({ message: snackbarMessage });
      navigateBack();
    } catch (error) {
      snackbar({
        message: `Something went wrong: ${error.message}`,
        severity: "error",
      });
    }
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(500, "Maximum length is 500")
      .min(3, "Minimum length is 3"),
    completed: Yup.bool(),
  });

  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { isSubmitting, isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: title || "",
      completed: completed || false,
    },
  });

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card
        variant="outlined"
        sx={{
          pt: 2,
          px: 2,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 1,
          width: 1,
          mb: 3,
        }}
      >
        <Controller
          name="completed"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              disabled={isSubmitting}
              onClick={() => trigger("title")}
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Box sx={{ width: 1 }}>
              <TextField
                {...field}
                fullWidth
                multiline
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    textDecoration: getValues("completed")
                      ? "line-through"
                      : "",
                    pt: 0.8,
                    fontSize: 20,
                  },
                }}
                disabled={isSubmitting}
                error={!!errors.title}
                helperText={errors.title?.message || " "}
              />
            </Box>
          )}
        />
      </Card>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="flex-end"
        gap={3}
      >
        <Button
          sx={{ px: 5 }}
          onClick={() => navigateBack()}
          variant="outlined"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <LoadingButton
          type="submit"
          loading={isSubmitting}
          sx={{
            px: 5,
            "&:disabled": {
              backgroundColor: "background.disable",
            },
          }}
          variant="contained"
          disabled={!isDirty || isSubmitting || !isValid}
        >
          Save
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default TaskForm;
