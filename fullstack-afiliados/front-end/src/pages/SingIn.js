import { AccountBox } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function SignIn() {
  const onSubmit = () => {
    
  };
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
    >
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "4em", color: "black", fontWeight: "700" }}
        >
          Coodesh
        </Typography>
        <Typography sx={{ fontSize: "1.5em", color: "#1267FC" }}>
          Full-Stack challenge
        </Typography>
      </Box>
      <Box
        sx={{
          paddingTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#1267FC" }}>
          <AccountBox />
        </Avatar>
        <Typography component="h1" variant="h4">
          Login
        </Typography>
        <Box component={"form"} onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 3 }}
          >
            Logar
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link  href="/singup" variant="button">{"Criar sua conta"}</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
