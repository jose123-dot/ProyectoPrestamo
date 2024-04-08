import React, { useState } from "react";

const ConversonMoneda = () => {
  const [dollarAmount, setDollarAmount] = useState(0);
  const [euroAmount, setEuroAmount] = useState(0);
  const [dominicanPesos, setDominicanPesos] = useState(0); // Ensure initial state is 0

  const handleDollarChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      // Check for valid number before calculation
      setDollarAmount(value);
      setDominicanPesos(value * 56.5); // Assuming an exchange rate of 1 USD = 56.50 DOP
    }
  };

  const handleEuroChange = (event) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      // Check for valid number before calculation
      setEuroAmount(value);
      setDominicanPesos(value * 64.2); // Assuming an exchange rate of 1 EUR = 64.20 DOP
    }
  };

  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="block  text-4xl text-white  font-bold mb-2">
        Convertidor de moneda
      </h1>

      <div>
        <label className="block text-white text-sm font-bold mb-2">
          Dólares:
        </label>
        <input
          type="number"
          value={dollarAmount}
          onChange={handleDollarChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <span>DOP: {dominicanPesos.toFixed(2)}</span>
      </div>

      <div>
        <label className="block text-white text-sm font-bold mb-2">
          Euros:
        </label>
        <input
          type="number"
          value={euroAmount}
          onChange={handleEuroChange}
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <span>DOP: {dominicanPesos.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ConversonMoneda;
