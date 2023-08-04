import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FileForm from "../components/FileForm";
import TransactionList from "../components/TransactionList";
const MainPage = () => {
  const [getSellerEvent, setGetSellerEvent] = React.useState(false);

  return (
    <React.Fragment>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" align="center" sx={{ flexGrow: 1 }}>
              Fullstack Afiliados
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <FileForm getSellerEventHandle={setGetSellerEvent} />
        <TransactionList
          getSellerEvent={getSellerEvent}
          getSellerEventHandle={setGetSellerEvent}
        />
      </Box>
    </React.Fragment>
  );
};

export default MainPage;
