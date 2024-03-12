import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import SolicitudPersona from "./pages/SolicitudPersona/create";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Login />}></Route>;
        </Routes>

        <Routes>
          <Route
            path="/create/solicitudpersona"
            element={<SolicitudPersona />}
          ></Route>
          ;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
