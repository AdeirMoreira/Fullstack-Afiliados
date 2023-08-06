import React from "react";
import { AppBar, Avatar, Box, Button, Typography } from "@mui/material";
import FileForm from "../components/FileForm";
import TransactionList from "../components/TransactionList";
import { useNavigate } from "react-router-dom";
import { getTokenData, removeToken } from "../services";

const MainPage = () => {
  const [getSellerEvent, setGetSellerEvent] = React.useState(false);
  const navigate = useNavigate();
  const [payload, setPayload] = React.useState({});

  const LogOut = () => {
    removeToken();
    navigate("/");
  };

  React.useEffect(() => {
    setPayload(getTokenData());
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar position="relative">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h5"
            align="center"
            alignSelf="center"
            sx={{ paddingTop: 2 }}
          >
            Fullstack Afiliados
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifySelf: "end",
              alignSelf: "flex-end",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: -5,
                marginRight: 2,
              }}
            >
              <Avatar></Avatar>
              <Typography>{payload.name}</Typography>
            </Box>
            <Box sx={{ marginRight: 1, marginTop: -4 }}>
              <Button variant="contained" color="success" onClick={LogOut}>
                Logout
              </Button>
            </Box>
          </Box>
        </Box>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {payload.admin && <FileForm getSellerEventHandle={setGetSellerEvent} />}
        <TransactionList
          getSellerEvent={getSellerEvent}
          getSellerEventHandle={setGetSellerEvent}
        />
      </Box>
      <Box>
        <AppBar position="relative" sx={{ padding: 1 }}>
          <Typography variant="h5" align="center">
            Fullstack Afiliados
          </Typography>
        </AppBar>
      </Box>
    </Box>
  );
};

export default MainPage;
