import { AccountBox, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { login } from "../services/index";
import CustonSnackbar from "../components/Snackbar";
import { ERROR } from "../constants";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [snackbarInfo, setSnackbarInfo] = React.useState({
    show: false,
    message: "",
    severety: null,
  });
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const body = { email, password };

    login(body)
      .then(() => {
        navigate("/Main");
      })
      .catch((error) => {
        setSnackbarInfo({
          show: true,
          severety: ERROR,
          color: ERROR,
          message: error.errorMessage,
        });
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarInfo({
      ...snackbarInfo,
      show: false,
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
              <Link href="/singup" variant="button">
                {"Criar sua conta"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
