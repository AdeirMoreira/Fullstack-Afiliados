import { Box } from "@mui/material";
import React from "react";
import CollapsibleTable from "./CollapsibleTable";
import { fetchSellers } from "../services";
import CustonSnackbar from "./Snackbar";
import { ERROR } from "../constants";

const TransactionList = (props) => {
  const { getSellerEvent, getSellerEventHandle } = props;
  const [sellers, setSellers] = React.useState([]);
  const [snackbarInfo, setSnackbarInfo] = React.useState({
    show: false,
    message: "",
    severety: null,
  });

  React.useEffect(() => {
    fetchSellers().then((res) => setSellers(res));
  }, []);

  React.useEffect(() => {
    if (getSellerEvent) {
      fetchSellers().then((res) => {
        setSellers(res);
        getSellerEventHandle(false);
      }).catch((error) => {

        setSnackbarInfo({
          show: true,
          severety: ERROR,
          color: ERROR,
          message: error.errorMessage,
        });
      });
    }
  }, [getSellerEvent, getSellerEventHandle]);

  const handleCloseSnackbar = () => {
    setSnackbarInfo({
      ...snackbarInfo,
      show: false,
    })};

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
        <CollapsibleTable sellers={sellers} />
      </Box>
    </React.Fragment>
  );
};

export default TransactionList;
