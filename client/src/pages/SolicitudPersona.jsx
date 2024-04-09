import React from "react";
import { useForm } from "react-hook-form";
import Calculadora from "../components/calculadora";
const SolicitudPersona = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes enviar los datos a tu servidor
  };

  return (
    <div className="flex">
      {/* Primera columna */}
      <div className="w-3/4  p-">
        <h2 className="text-center text-4xl">Solicitar Prestamo</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Monto a Solicitar:
            </label>
            <input
              {...register("monto")}
              type="number"
              placeholder="Monto"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Duración (meses):
            </label>
            <input
              {...register("duracionMeses")}
              type="number"
              placeholder="Duración (meses)"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>

      {/* Segunda columna */}
      <div className="p-2">
        <Calculadora></Calculadora>
      </div>
    </div>
  );
};

export default SolicitudPersona;
