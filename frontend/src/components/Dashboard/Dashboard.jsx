import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
