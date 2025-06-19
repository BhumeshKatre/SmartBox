import React, { useState } from 'react';

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('meters');
  const [outputUnit, setOutputUnit] = useState('kilometers');

  const units = {
    meters: 1,
    kilometers: 0.001,
    miles: 0.000621371,
    feet: 3.28084,
    inches: 39.3701,
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
    convertValue(e.target.value, outputUnit, inputValue);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
    convertValue(inputUnit, e.target.value, inputValue);
  };

  const convertValue = (fromUnit, toUnit, value) => {
    const convertedValue = (value * units[fromUnit]) / units[toUnit];
    setOutputValue(convertedValue);
  };

  const handleConvert = () => {
    convertValue(inputUnit, outputUnit, inputValue);
  };

  return (
    <div>
      <h1>Unit Converter</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter value"
      />
      <select value={inputUnit} onChange={handleInputUnitChange}>
        {Object.keys(units).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
      <button onClick={handleConvert}>Convert</button>
      <h2>Converted Value: {outputValue}</h2>
      <select value={outputUnit} onChange={handleOutputUnitChange}>
        {Object.keys(units).map((unit) => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnitConverter;