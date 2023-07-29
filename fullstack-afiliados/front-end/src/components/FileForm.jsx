import React from "react";
import { uploadFile } from "../services";
import { Box, Button, Input, Typography } from "@mui/material";
import CustonSnackbar from "./Snackbar";
import {
  ERROR,
  FILE_NOT_SELECTED,
  INCORRECT_FILE,
  SUCCESS,
  UPLOAD_FAILURE,
  UPLOAD_SUCCESS,
} from "../constants";

const FileForm = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [snackbarInfo, setSnackbarInfo] = React.useState({
    show: false,
    message: "",
    severety: null,
  });

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const sendFile = () => {
    const hasError = checkFile();

    if (!hasError) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      uploadFile(formData)
        .then(() => {
          setSnackbarInfo({
            show: true,
            severety: SUCCESS,
            color: SUCCESS,
            message: UPLOAD_SUCCESS,
          });
        })
        .catch(() => {

          setSnackbarInfo({
            show: true,
            severety: ERROR,
            color: ERROR,
            message: UPLOAD_FAILURE,
          });
        });
    }
  };

  const checkFile = () => {
    const info = { show: true, severety: ERROR, color: ERROR };
    if (selectedFile === null) {
      console.log('NULL');
      setSnackbarInfo({
        ...info,
        message: FILE_NOT_SELECTED,
      });

      return true;
    }

    if (selectedFile.name.split(".")[1] !== "txt") {
      setSnackbarInfo({
        ...info,
        message: INCORRECT_FILE,
      });

      return true;
    }

    return false;
  };

  const handleCloseSnackbar = () => {
    setSnackbarInfo({
      ...snackbarInfo,
      show: false,
    });
  };

  return (
    <React.Fragment>
      <CustonSnackbar
        open={snackbarInfo.show}
        message={snackbarInfo.message}
        severity={snackbarInfo.severety}
        color={snackbarInfo.color}
        handleClose={handleCloseSnackbar}
      />
      <Box sx={{ padding: "1em" }}>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Upload arquivo de transações</Typography>
            <Input color="primary" type="file" onChange={handleFileInput} />
            <Button color="success" variant="contained" onClick={sendFile}>
              Upload
            </Button>
          </div>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default FileForm;
