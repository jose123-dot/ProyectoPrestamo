import React from "react";
import Menu from "../menu/menu.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import Main from "../Dashboard/Main.jsx";

const Dashboard = () => {
  return (
    <>
      <div className="container-scroller">
        <Menu></Menu>
        <div className="container-fluid page-body-wrapper">
          <Header></Header>
          <div className="main-panel">
            <div className="content-wrapper">
              <Main></Main>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
