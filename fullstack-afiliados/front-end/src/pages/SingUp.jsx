import { AccountBox, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { registerUser } from "../services/index";
import CustonSnackbar from "../components/Snackbar";
import { ERROR, SUCCESS, USER_CREATE_SUCCESS } from "../constants";

export default function SignUP() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [admin, setAdmin] = React.useState(false);
  const [error, setError] = React.useState("");
  const [snackbarInfo, setSnackbarInfo] = React.useState({
    show: false,
    message: "",
    severety: null,
  });


  const onSubmit = (event) => {
    event.preventDefault();
    const body = { name, email, password, admin };

    if (error === "") {
      registerUser(body)
        .then(() => {
          setSnackbarInfo({
            show: true,
            severety: SUCCESS,
            color: SUCCESS,
            message: USER_CREATE_SUCCESS,
          });

        })
        .catch((error) => {
          setSnackbarInfo({
            show: true,
            severety: ERROR,
            color: ERROR,
            message: error.errorMessage,
          });
        });
    }
  };

  const hadlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 8) {
      setError("A senha deve ter no mínimo 8 caracteres.");
    } else {
      setError("");
    }
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
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              id="password"
              value={password}
              onChange={hadlePassword}
              error={error !== ""}
              helperText={error}
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
            <FormControlLabel
              control={
                <Switch
                  checked={admin}
                  onChange={(event) => setAdmin(event.target.checked)}
                />
              }
              label="Usuário administrador"
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
              <Link href="/" variant="button">
                {"Login"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
