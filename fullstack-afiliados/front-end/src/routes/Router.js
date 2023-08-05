import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main";
import SignIn from "../pages/SingIn";
import SignUP from "../pages/SingUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={SignIn}></Route>
        <Route exact path="/singup" Component={SignUP}></Route>
        <Route exact path="/Main" Component={MainPage}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
