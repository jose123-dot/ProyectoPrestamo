import React, { useState } from "react";
import { motion } from "framer-motion";

import Menu from "../menu";
import FormSolicitud from "./form";

const CreateSolicitudPersona = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="fixed w-64 h-screen bg-gray-800 text-white overflow-y-auto flex flex-col items-center justify-between py-4"
      >
        {/* Sidebar logo (optional) */}
        <h1 className="text-xl font-bold mb-4">MAJOJOLEFA</h1>

        {/* Sidebar menu */}
        <Menu></Menu>
      </motion.div>

      {/* Main content area */}
      <div className="flex flex-col w-full pl-64">
        {/* Header (optional) */}
        <header className="bg-gray-100 shadow-sm py-2 px-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Enviar tu Solicitud</h2>
          <button
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Ocultar Sidebar" : "Mostrar Sidebar"}
          </button>
        </header>

        {/* Content */}
        <main className="flex-grow px-4 py-4">
          {/* //formulario para enviar solicitud */}
          <FormSolicitud></FormSolicitud>
          {/* fin de Formulario */}
        </main>
      </div>
    </div>
  );
};

export default CreateSolicitudPersona;
