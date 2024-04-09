import React, { useState } from "react";

const Calculadora = () => {
  const [plazo, setPlazo] = useState(6);
  const [monto, setMonto] = useState("");
  const tasaInteresAnual = 0.19;

  const handlePlazoChange = (event) => {
    setPlazo(parseInt(event.target.value));
  };

  const handleMontoChange = (event) => {
    setMonto(parseFloat(event.target.value));
  };

  const calcularPagoMensual = () => {
    const tasaInteresMensual = tasaInteresAnual / 12;
    const cuota =
      monto *
      (tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -plazo)));
    return cuota.toFixed(2);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-2xl text-black font-semibold mb-4 text-center">
        Calculadora de Pagos
      </h1>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Monto del préstamo:
        </label>
        <input
          type="number"
          value={monto}
          onChange={handleMontoChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Plazo (meses):
        </label>
        <select
          value={plazo}
          onChange={handlePlazoChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
        </select>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Resultado</h2>
        <p className="text-gray-700 mb-1">Monto: {monto}</p>
        <p className="text-gray-700 mb-1">Plazo: {plazo} meses</p>
        <p className="text-gray-700">Pago mensual: {calcularPagoMensual()}</p>
      </div>
    </div>
  );
};

export default Calculadora;
