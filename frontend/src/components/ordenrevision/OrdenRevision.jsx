import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import OrdenRevisionCreate from "../ordenrevision/OrdenRevisionCreate.jsx";

const OrdenRevision = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel ">
            <div className="content-wrapper bg-dark">
              <OrdenRevisionCreate></OrdenRevisionCreate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdenRevision;