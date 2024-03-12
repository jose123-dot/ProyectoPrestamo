import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";

import SolicitudPTable from "../solicitudP/SolicitudPTable.jsx";

const SolicitudP = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel ">
            <div className="content-wrapper bg-dark">
              <SolicitudPTable></SolicitudPTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolicitudP;
