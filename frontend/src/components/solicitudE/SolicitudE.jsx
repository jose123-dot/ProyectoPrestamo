import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import SolicitudECreate from "../solicitudE/SolicitudECreate.jsx";

const SolicitudE = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel ">
            <div className="content-wrapper bg-dark">
              <SolicitudECreate></SolicitudECreate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudE;