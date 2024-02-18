import { useContext } from "react";
import { SnackbarContext } from "utils/context/SnackbarProvider";

const useSnackbar = () => useContext(SnackbarContext);

export default useSnackbar;
