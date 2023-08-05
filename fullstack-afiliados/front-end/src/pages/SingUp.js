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

export default function SignUP() {
  const onSubmit = () => {};
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#1267FC" }}>
          <AccountBox />
        </Avatar>
        <Typography component="h1" variant="h4">
          Cadastro
        </Typography>
        <Box component={"form"} onSubmit={onSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nome"
            name="email"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            type="email"
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
            Cadastrar
          </Button>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link  href="/" variant="button">{"Login"}</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
