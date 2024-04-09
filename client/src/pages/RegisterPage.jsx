import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const [otrosIngresos, setOtrosIngresos] = useState(false);
  const [poseeInmueble, setPoseeInmueble] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  const handleChange = (event) => {
    const value = event.target.value === "true"; // Convertir string a booleano
    setOtrosIngresos(value);
  };

  const handlePoseeInmuebleChange = (event) => {
    const value = event.target.value === "true"; // Convertir string a booleano
    setPoseeInmueble(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return (
    <>
      <h1 className="text-center text-4xl">Registro</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <br></br>

        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Correo Electronico
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              placeholder="Correo Electronico"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              placeholder="*************"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputUsername2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              {...register("nombre")}
            />
            {errors.nombre?.message && (
              <p className="text-red-500">{errors.nombre?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputEmail2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Apellido
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputEmail2"
              placeholder="Apellido"
              {...register("apellido")}
            />
          </div>
          {errors.apellido?.message && (
            <p className="text-red-500">{errors.apellido?.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="exampleInputEmail2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Apodo
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputEmail2"
              placeholder="Apodo"
              {...register("apodo")}
            />
          </div>
          {errors.apodo?.message && (
            <p className="text-red-500">{errors.apodo?.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nacionalidad
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              placeholder="Nacionalidad"
              {...register("nacionalidad")}
            />
            {errors.nacionalidad?.message && (
              <p className="text-red-500">{errors.nacionalidad?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleFormControlSelect2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sexo
          </label>
          <div className="col-sm-9">
            <select
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleFormControlSelect2"
              {...register("sexo")}
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="exampleFormControlSelect2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tipo de Documento
          </label>
          <div className="col-sm-9">
            <select
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleFormControlSelect2"
              {...register("tipodocumento")}
            >
              <option value="Cedula">Cedula</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="DNI">DNI</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputMobile"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Documento
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputMobile"
              placeholder="Cedula o Pasaporte"
              {...register("documento")}
            />
            {errors.documento?.message && (
              <p className="text-red-500">{errors.documento?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profesion
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              placeholder="Profesion"
              {...register("profesion")}
            />
            {errors.profesion?.message && (
              <p className="text-red-500">{errors.profesion?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefono Residencial
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              placeholder="Telefono Residencial"
              {...register("telefonoresidencial")}
            />
            {errors.telefonoresidencial?.message && (
              <p className="text-red-500">
                {errors.telefonoresidencial?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Celular
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              placeholder="Celular"
              {...register("celular")}
            />
            {errors.celular?.message && (
              <p className="text-red-500">{errors.celular?.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="exampleInputConfirmPassword2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Direccion
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputConfirmPassword2"
              {...register("direccion")}
            />
            {errors.direccion?.message && (
              <p className="text-red-500">{errors.direccion?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputNoCasa"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            No. Residencia
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputNoCasa"
              placeholder="Edificio No."
              {...register("noresidencia")}
            />
            {errors.noresidencia?.message && (
              <p className="text-red-500">{errors.noresidencia?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputSector"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sector
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputSector"
              placeholder="Sector"
              {...register("sector")}
            />
            {errors.sector?.message && (
              <p className="text-red-500">{errors.sector?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label>
            Municipio:
            <select
              {...register("municipio")}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Barahona">Barahona</option>
              <option value="Azua">Azua</option>
            </select>
          </label>
        </div>
        <div className="mb-5">
          <label>
            Provincia:
            <select
              {...register("provincia")}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={"Barahona"}>Barahona</option>
              <option value={"Azua"}>Azua</option>
            </select>
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputDireccionFamiliar"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dirección Familiar
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputDireccionFamiliar"
              placeholder="Dirección Familiar"
              {...register("direccionfamiliar")}
            />
            {errors.direccionfamiliar?.message && (
              <p className="text-red-500">
                {errors.direccionfamiliar?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputCargoTrabajo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cargo de Trabajo
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputCargoTrabajo"
              placeholder="Cargo de Trabajo"
              {...register("cargotrabajo")}
            />
            {errors.cargotrabajo?.message && (
              <p className="text-red-500">{errors.cargotrabajo?.message}</p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputDireccionTrabajo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dirección de Trabajo
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputDireccionTrabajo"
              placeholder="Dirección de Trabajo"
              {...register("direcciontrabajo")}
            />
            {errors.direcciontrabajo?.message && (
              <p className="text-red-500">{errors.direcciontrabajo?.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="exampleInputDireccionTrabajo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Valor de Ingreso
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputDireccionTrabajo"
              placeholder="DOP$"
              {...register("valoringreso")}
            />
            {errors.valoringreso?.message && (
              <p className="text-red-500">{errors.valoringreso?.message}</p>
            )}
          </div>
        </div>

        <div className="col-sm-9">
          <select
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="exampleInputOtrosIngresos"
            {...register("otrosingresos")}
            onChange={handleChange} // Manejar cambio en el select
            value={otrosIngresos ? "true" : "false"} // Establecer valor del select
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>

        <div>
          <div className="mb-5">
            <label
              htmlFor="exampleInputPoseeInmueble"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Posee Inmueble?
            </label>
            <div className="col-sm-9">
              <select
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="exampleInputPoseeInmueble"
                {...register("poseeinmueble")}
                onChange={handlePoseeInmuebleChange} // Manejar cambio en el select
                value={poseeInmueble ? "true" : "false"}
              >
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          {errors.poseeinmueble?.message && (
            <p className="text-red-500">{errors.poseeinmueble?.message}</p>
          )}

          <div className="mb-5">
            <label
              htmlFor="exampleInputValorInmueble"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Valor del Inmueble
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="exampleInputValorInmueble"
                placeholder="Valor del Inmueble"
                {...register("valorinmueble")}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <label
              htmlFor="exampleInputPoseeVehiculo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Posee Vehículo?
            </label>
            <div className="col-sm-9">
              <select
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="exampleInputPoseeVehiculo"
                {...register("poseevehiculo")}
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="exampleInputValorVehiculo"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Valor del Vehículo
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="exampleInputValorVehiculo"
                placeholder="Valor del Vehículo"
                {...register("valorvehiculo")}
              />
              {errors.valorvehiculo?.message && (
                <p className="text-red-500">{errors.valorvehiculo?.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputMonto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Monto
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputMonto"
              placeholder="Monto"
              {...register("monto")}
            />
            {errors.monto?.message && (
              <p className="text-red-500">{errors.monto?.message}</p>
            )}
          </div>
          <div>
            <>
              <div className="mb-5">
                <label
                  htmlFor="exampleInputNombreEmpresa"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputNombreEmpresa"
                    placeholder="Nombre de la Empresa"
                    {...register("nombreEmpresa")}
                  />
                  {errors.nombreEmpresa?.message && (
                    <p className="text-red-500">
                      {errors.nombreEmpresa?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="exampleInputDireccionEmpresa"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dirección de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputDireccionEmpresa"
                    placeholder="Dirección de la Empresa"
                    {...register("direccionEmpresa")}
                  />
                  {errors.direccionEmpresa?.message && (
                    <p className="text-red-500">
                      {errors.direccionEmpresa?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputRNC"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  RNC (Registro Nacional de Contribuyentes)
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputRNC"
                    placeholder="RNC (Registro Nacional de Contribuyentes)"
                    {...register("RNC")}
                  />
                  {errors.RNC?.message && (
                    <p className="text-red-500">{errors.RNC?.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputTelefonoEmpresa"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Teléfono de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputTelefonoEmpresa"
                    placeholder="Teléfono de la Empresa"
                    {...register("telefonoEmpresa")}
                  />
                  {errors.telefonoEmpresa?.message && (
                    <p className="text-red-500">
                      {errors.telefonoEmpresa?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="exampleInputCorreoEmpresa"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Correo Electrónico de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputCorreoEmpresa"
                    placeholder="Correo Electrónico de la Empresa"
                    {...register("correoEmpresa")}
                  />
                  {errors.correoEmpresa?.message && (
                    <p className="text-red-500">
                      {errors.correoEmpresa?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputFax"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Fax de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputFax"
                    {...register("fax")}
                  />
                  {errors.fax?.message && (
                    <p className="text-red-500">{errors.fax?.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputActividad"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Actividad de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputActividad"
                    {...register("actividad")}
                  />
                  {errors.actividad?.message && (
                    <p className="text-red-500">{errors.actividad?.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="exampleInputSitioWeb"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sitio Web de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputSitioWeb"
                    placeholder="Sitio Web de la Empresa"
                    {...register("sitioweb")}
                  />
                  {errors.sitioweb?.message && (
                    <p className="text-red-500">{errors.sitioweb?.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputFechaFundacion"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Fecha de Fundación de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputFechaFundacion"
                    placeholder="Fecha de Fundación de la Empresa"
                    {...register("fechafundacion")}
                  />
                  {errors.fechafundacion?.message && (
                    <p className="text-red-500">
                      {errors.fechafundacion?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputPaisFundacion"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  País de Fundación de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputPaisFundacion"
                    placeholder="País de Fundación de la Empresa"
                    {...register("paisfundacion")}
                  />
                  {errors.paisfundacion?.message && (
                    <p className="text-red-500">
                      {errors.paisfundacion?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputIngresosAnuales"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ingresos Anuales de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputIngresosAnuales"
                    placeholder="Ingresos Anuales de la Empresa"
                    {...register("ingresosanuales")}
                  />
                  {errors.ingresosanuales?.message && (
                    <p className="text-red-500">
                      {errors.ingresosanuales?.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="exampleInputTotalActivos"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Total de Activos de la Empresa
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="exampleInputTotalActivos"
                    placeholder="Total de Activos de la Empresa"
                    {...register("totalactivos")}
                  />
                  {errors.totalactivos?.message && (
                    <p className="text-red-500">
                      {errors.totalactivos?.message}
                    </p>
                  )}
                </div>
              </div>
              {/* */}
            </>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span></span> Registrarme
        </button>
      </form>
    </>
  );
}

export default Register;
