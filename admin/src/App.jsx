import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./page/login/login";
import OrdenRevision from "./page/OrdenRevision/ordenrevision";
import Revision from "./page/revision/revision";
import MetodoPago from "./page/metodopago/metodopago";

import Contrato from "./page/contrato/contrato";
import Cliente from "./page/cliente/cliente";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/ordenrevision" element={<OrdenRevision />}></Route>
        <Route path="/revision" element={<Revision />}></Route>
        <Route path="/metodopago" element={<MetodoPago />}></Route>
        <Route path="/contrato" element={<Contrato />}></Route>
        <Route path="/cliente" element={<Cliente />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
