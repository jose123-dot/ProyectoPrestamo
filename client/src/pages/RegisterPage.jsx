import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

function Register() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    apodo: "",
    nacionalidad: "",
    sexo: "",
    tipodocumento: "",
    documento: "",
    ocupacion: "",
    telefonoresidencial: "",
    celular: "",
    correo: "",
    direccion: "",
    noresidencia: "",
    sector: "",
    municipio: "",
    provincia: "",
    direccionfamiliar: "",
    cargotrabajo: "",
    direcciontrabajo: "",
    ingreso: "",
    otrosingresos: false,
    poseeinmueble: false,
    valorinmueble: "",
    poseevehiculo: false,
    valorvehiculo: "",
    monto: "",
    poseeempresa: false,
    nombreEmpresa: "",
    direccionEmpresa: "",
    RNC: "",
    telefonoEmpresa: "",
    correoEmpresa: "",
    fax: "",
    actividad: "",
    sitioweb: "",
    fechafundacion: "",
    paisfundacion: "",
    ingresosanuales: "",
    totalactivos: "",
    archivos: [],
  });
  const [archivos, setarchivos] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const navegate = useNavigate();

  const formData = new FormData();
  for (const key in inputData) {
    formData.append(key, inputData[key]);
  }
  archivos.forEach((file) => formData.append("archivos", file));

  //arrastrar elemento
  const onDrop = (acceptedFiles) => {
    setarchivos([...archivos, ...acceptedFiles]);
  };

  useEffect(() => {
    axios
      .get("https://api.digital.gob.do/v1/territories/provinces")
      .then((response) => {
        setProvinces(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });

    axios
      .get("https://api.digital.gob.do/v1/territories/municipalities")
      .then((response) => {
        setMunicipios(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching municipios:", error);
      });
  }, []);

  const handleProvinceChange = (event) => {
    setInputData({ ...inputData, provincia: event.target.value });
  };

  const handleMunicipioChange = (event) => {
    setInputData({ ...inputData, municipio: event.target.value });
  };
  //evento para el submit
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/signup", formData)
      .then((res) => {
        alert("se ha Insertado Correctamente!");
        navegate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1 className="text-center text-4xl">Registro</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
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
              value={inputData.correo}
              onChange={(e) =>
                setInputData({ ...inputData, correo: e.target.value })
              }
            />
          </div>
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
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
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
              value={inputData.nombre}
              onChange={(e) =>
                setInputData({ ...inputData, nombre: e.target.value })
              }
            />
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
              value={inputData.apellido}
              onChange={(e) =>
                setInputData({ ...inputData, apellido: e.target.value })
              }
            />
          </div>
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
              value={inputData.apodo}
              onChange={(e) =>
                setInputData({ ...inputData, apodo: e.target.value })
              }
            />
          </div>
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
              value={inputData.nacionalidad}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  nacionalidad: e.target.value,
                })
              }
            />
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
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  sexo: e.target.value,
                })
              }
            >
              <option value={inputData.sexo}>Masculino</option>
              <option value={inputData.sexo}>Femenino</option>
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
              value={inputData.tipodocumento}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  tipodocumentodocumento: e.target.value,
                })
              }
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
              value={inputData.documento}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  documento: e.target.value,
                })
              }
            />
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
              value={inputData.ocupacion}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  ocupacion: e.target.value,
                })
              }
            />
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
              value={inputData.telefonoresidencial}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  telefonoresidencial: e.target.value,
                })
              }
            />
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
              value={inputData.celular}
              onChange={(e) =>
                setInputData({ ...inputData, celular: e.target.value })
              }
            />
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
              placeholder="Direccion"
              value={inputData.direccion}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  direccion: e.target.value,
                })
              }
            />
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
              value={inputData.noresidencia}
              placeholder="Edificio No."
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  noresidencia: e.target.value,
                })
              }
            />
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
              value={inputData.sector}
              onChange={(e) =>
                setInputData({ ...inputData, sector: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-5">
          <label>
            Municipio:
            <select
              value={inputData.municipio}
              onChange={handleMunicipioChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">-- Seleccionar Municipio --</option>
              {municipios.map((municipio, index) => (
                <option key={index} value={municipio.id}>
                  {municipio.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-5">
          <label>
            Provincia:
            <select
              value={inputData.provincia}
              onChange={handleProvinceChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">-- Seleccionar provincia --</option>
              {provinces.map((province, index) => (
                <option key={index} value={province.id}>
                  {province.name}
                </option>
              ))}
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
              value={inputData.direccionfamiliar}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  direccionfamiliar: e.target.value,
                })
              }
            />
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
              value={inputData.cargotrabajo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  cargotrabajo: e.target.value,
                })
              }
            />
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
              value={inputData.direcciontrabajo}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  direcciontrabajo: e.target.value,
                })
              }
            />
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
              value={inputData.ingreso}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  ingreso: parseFloat(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="exampleInputOtrosIngresos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Otros Ingresos
          </label>
          <div className="col-sm-9">
            <select
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="exampleInputOtrosIngresos"
              value={inputData.otrosingresos}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  otrosingresos: e.target.value === "true",
                })
              }
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
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
                value={inputData.poseeinmueble}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    poseeinmueble: e.target.value === "true",
                    valorinmueble:
                      e.target.value === "false" ? "" : inputData.valorinmueble, // Limpiar el valor del inmueble si selecciona "No"
                  })
                }
              >
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          {inputData.poseeinmueble && (
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
                  value={inputData.valorinmueble}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      valorinmueble: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          )}
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
                value={inputData.poseevehiculo}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    poseevehiculo: e.target.value === "true",
                    valorvehiculo:
                      e.target.value === "false" ? "" : inputData.valorvehiculo, // Limpiar el valor del vehículo si selecciona "No"
                  })
                }
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          {inputData.poseevehiculo && (
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
                  value={inputData.valorvehiculo}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      valorvehiculo: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          )}
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
              value={inputData.monto}
              onChange={(e) =>
                setInputData({
                  ...inputData,
                  monto: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div>
            <div className="mb-5">
              <label
                htmlFor="exampleInputPoseeEmpresa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ¿Posee Empresa?
              </label>
              <div className="col-sm-9">
                <select
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="exampleInputPoseeEmpresa"
                  value={inputData.poseeempresa}
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      poseeempresa: e.target.value === "true",
                      nombreEmpresa:
                        e.target.value === "false"
                          ? ""
                          : inputData.nombreEmpresa,
                      direccionEmpresa:
                        e.target.value === "false"
                          ? ""
                          : inputData.direccionEmpresa,
                      RNC: e.target.value === "false" ? "" : inputData.RNC,
                      telefonoEmpresa:
                        e.target.value === "false"
                          ? ""
                          : inputData.telefonoEmpresa,
                      correoEmpresa:
                        e.target.value === "false"
                          ? ""
                          : inputData.correoEmpresa,
                      fax: e.target.value === "false" ? "" : inputData.fax,
                      actividad:
                        e.target.value === "false" ? "" : inputData.actividad,
                      sitioweb:
                        e.target.value === "false" ? "" : inputData.sitioweb,
                      fechafundacion:
                        e.target.value === "false"
                          ? ""
                          : inputData.fechafundacion,
                      paisfundacion:
                        e.target.value === "false"
                          ? ""
                          : inputData.paisfundacion,
                      ingresosanuales:
                        e.target.value === "false"
                          ? ""
                          : inputData.ingresosanuales,
                      totalactivos:
                        e.target.value === "false"
                          ? ""
                          : inputData.totalactivos,
                    })
                  }
                >
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            {inputData.poseeempresa && (
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
                      value={inputData.nombreEmpresa}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          nombreEmpresa: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.direccionEmpresa}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          direccionEmpresa: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.RNC}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          RNC: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.telefonoEmpresa}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          telefonoEmpresa: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.correoEmpresa}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          correoEmpresa: e.target.value,
                        })
                      }
                    />
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
                      placeholder="Fax de la Empresa"
                      value={inputData.fax}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          fax: e.target.value,
                        })
                      }
                    />
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
                      placeholder="Actividad de la Empresa"
                      value={inputData.actividad}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          actividad: e.target.value,
                        })
                      }
                    />
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
                      type="url"
                      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      id="exampleInputSitioWeb"
                      placeholder="Sitio Web de la Empresa"
                      value={inputData.sitioweb}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          sitioweb: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.fechafundacion}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          fechafundacion: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.paisfundacion}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          paisfundacion: e.target.value,
                        })
                      }
                    />
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
                      value={inputData.ingresosanuales}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          ingresosanuales: parseFloat(e.target.value),
                        })
                      }
                    />
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
                      value={inputData.totalactivos}
                      onChange={(e) =>
                        setInputData({
                          ...inputData,
                          totalactivos: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                {/* */}
              </>
            )}
          </div>
          <br></br>
          <br></br>
          <p className="text-blue-500">Documento de Indentidad*</p>
          <p className="text-blue-500">Carta de trabajo*</p>
          <p className="text-blue-500">Titulo*</p>
          <p className="text-blue-500">Matricula si Posee Vehiculo*</p>
          <br></br>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                style={{
                  border: "1px dashed #ccc",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <input {...getInputProps()} />
                Arrastra tus Documentos Aqui!
              </div>
            )}
          </Dropzone>
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
