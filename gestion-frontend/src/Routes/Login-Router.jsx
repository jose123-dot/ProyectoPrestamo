import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";

const LoginRoute = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={Login}></Route>;
    </Routes>
    ;
  </BrowserRouter>;
};
export default LoginRoute;
