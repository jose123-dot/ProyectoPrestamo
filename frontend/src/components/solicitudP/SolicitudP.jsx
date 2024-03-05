import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import SolicitudPform from "../solicitudP/SolicitupPform.jsx";

const SolicitudP = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel">
            <div className="content-wrapper">
              <SolicitudPform></SolicitudPform>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudP;
