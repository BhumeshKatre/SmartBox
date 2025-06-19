import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [convertedTemperature, setConvertedTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    setConvertedTemperature('');
  };

  const convertTemperature = () => {
    let result;
    const temp = parseFloat(temperature);
    if (unit === 'Celsius') {
      result = (temp * 9/5) + 32; // Celsius to Fahrenheit
      setConvertedTemperature(`${result.toFixed(2)} °F`);
    } else {
      result = (temp - 32) * 5/9; // Fahrenheit to Celsius
      setConvertedTemperature(`${result.toFixed(2)} °C`);
    }
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <input
        type="number"
        value={temperature}
        onChange={handleTemperatureChange}
        placeholder="Enter temperature"
      />
      <select value={unit} onChange={handleUnitChange}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <button onClick={convertTemperature}>Convert</button>
      {convertedTemperature && <p>Converted Temperature: {convertedTemperature}</p>}
    </div>
  );
};

export default TemperatureConverter;