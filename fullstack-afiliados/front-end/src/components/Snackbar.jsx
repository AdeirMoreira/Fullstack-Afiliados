import { Alert, Snackbar } from "@mui/material";
import * as React from "react";

const CustonSnackbar = (props) => {
  const { open, message, severity, color, handleClose } = props;
  
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <Alert variant="filled" onClose={handleClose} severity={severity} color={color} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustonSnackbar;
