import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import FileForm from "../components/FileForm";
import TransactionList from "../components/TransactionList";
const MainPage = () => {
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
      <Box sx={{
        display: 'flex',
        flexDirection:  {xs: 'column', md: 'row'},
      }}>
        <FileForm />
        <TransactionList/>
      </Box>
      
      
    </React.Fragment>
  );
};

export default MainPage;
