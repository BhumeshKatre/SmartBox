import React, { useState } from 'react';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [taxAmount, setTaxAmount] = useState(null);

  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    const taxRateValue = parseFloat(taxRate);
    if (!isNaN(incomeValue) && !isNaN(taxRateValue)) {
      setTaxAmount(incomeValue * (taxRateValue / 100));
    } else {
      setTaxAmount(null);
    }
  };

  return (
    <div>
      <h1>Tax Calculator</h1>
      <div>
        <label>
          Income:
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Tax Rate (%):
          <input
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateTax}>Calculate Tax</button>
      {taxAmount !== null && (
        <div>
          <h2>Tax Amount: ${taxAmount.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;