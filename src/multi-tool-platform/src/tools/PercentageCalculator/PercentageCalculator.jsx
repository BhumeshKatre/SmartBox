import React, { useState } from 'react';

const PercentageCalculator = () => {
  const [total, setTotal] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    const totalValue = parseFloat(total);
    const percentageValue = parseFloat(percentage);
    if (!isNaN(totalValue) && !isNaN(percentageValue)) {
      const calculatedResult = (totalValue * percentageValue) / 100;
      setResult(calculatedResult);
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <h1>Percentage Calculator</h1>
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <input
        type="number"
        placeholder="Percentage"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
      <button onClick={calculatePercentage}>Calculate</button>
      {result !== null && (
        <h2>Result: {result}</h2>
      )}
    </div>
  );
};

export default PercentageCalculator;