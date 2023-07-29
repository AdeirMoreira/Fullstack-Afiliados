import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={MainPage}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
