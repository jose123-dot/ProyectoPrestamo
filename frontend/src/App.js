import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Dashboard from "./components/Dashboard/Dashboard";
import SolicitudP from "./components/solicitudP/SolicitudP";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}></Route>
        <Route path="/Dashboard" Component={Dashboard}></Route>
        <Route path="/signup" Component={Signup}></Route>
        <Route path="/solicitudp" Component={SolicitudP}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
