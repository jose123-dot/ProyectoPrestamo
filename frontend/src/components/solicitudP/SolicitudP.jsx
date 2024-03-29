import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import SolicitupPCreate from "../solicitudP/SolicitupPCreate.jsx";

const SolicitudP = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel ">
            <div className="content-wrapper bg-dark">
              <SolicitupPCreate></SolicitupPCreate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudP;
