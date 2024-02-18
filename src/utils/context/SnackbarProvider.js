import Snackbar from "@mui/material/Snackbar";
import { createContext, useState } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severityColor, setSeverityColor] = useState("success.main");

  const getColorBySeverity = (severity) => {
    let severityColor = "";
    if (severity === "error") {
      severityColor = "error.main";
    }
    setSeverityColor(severityColor);
  };

  const snackbar = ({ message, severity }) => {
    setMessage(message);
    if (severity) getColorBySeverity(severity);
    setOpen(true);
  };

  const hideSnackbar = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ snackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={hideSnackbar}
        message={message}
        sx={{
          "& .MuiSnackbarContent-root": { backgroundColor: severityColor },
        }}
      />
    </SnackbarContext.Provider>
  );
};
