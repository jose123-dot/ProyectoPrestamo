"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiAnnotation,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const Menu = () => {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>
            <Link to="/dashboard">Dashboard</Link>
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiAnnotation}
            label="Solicitudes"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            <Sidebar.Item>
              <Link to="/create/solicitudpersona">
                Solicitud Prestamo Persona
              </Link>
            </Sidebar.Item>
            <Sidebar.Item>
              <Link to="/solicitudempresa">Solicitud Prestamo Empresa</Link>
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiInbox}>
            Gestion de Revisiones
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Gestion de Prestamos
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Recibos
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Menu;
