import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src="assets/images/logo.svg" alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini" href="/">
            <img src="assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-category">
            <span className="nav-link">Navegacion</span>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="index.html">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Gestion Solicitudes</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/solicitudp">
                    Solicitud Persona
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Solicitud Empresa
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/forms/basic_elements.html">
              <span className="menu-icon">
                <i className="mdi mdi-alarm-multiple"></i>
              </span>
              <span className="menu-title">Orden Revision</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title">Revision</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title">Metodos de Pago</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-account-card-details"></i>
              </span>
              <span className="menu-title">Contrato</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="pages/icons/mdi.html">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
              <span className="menu-title">Cliente</span>
            </a>
          </li>
          <li className="nav-item menu-items">
            <a className="nav-link" href="/">
              <span className="menu-icon">
                <i className="mdi mdi-fax"></i>
              </span>
              <span className="menu-title">Prestamos</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
