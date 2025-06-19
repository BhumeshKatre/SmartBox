import React, { useState } from "react";
import { Helmet } from "react-helmet";

const TaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [taxRate, setTaxRate] = useState("");
  const [taxAmount, setTaxAmount] = useState(null);

  const calculateTax = () => {
    const incomeValue = parseFloat(income);
    const rate = parseFloat(taxRate);

    if (incomeValue && rate) {
      const tax = incomeValue * (rate / 100);
      setTaxAmount(tax.toFixed(2));
    }
  };

  return (
    <>
      <Helmet>
        <title>Tax Calculator - SmartBox Tools</title>
        <meta
          name="description"
          content="Use the SmartBox Tax Calculator to calculate income tax easily based on your earnings and applicable tax rate."
        />
        <meta
          name="keywords"
          content="tax calculator, income tax calculator, tax tool, calculate tax, SmartBox tools"
        />
        <link rel="canonical" href="https://smartbox.dev/tools/tax-calculator" />
      </Helmet>

      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
              <h1 className="text-2xl font-bold text-blue-600">Tax Calculator</h1>
              <p className="text-sm text-gray-600">
                Enter your income and the tax rate to estimate your tax.
              </p>

              <input
                type="number"
                placeholder="Income (₹)"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Tax Rate (%)"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />

              <button
                onClick={calculateTax}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Calculate Tax
              </button>

              {taxAmount && (
                <div className="text-center text-lg font-semibold text-green-700 mt-4">
                  Estimated Tax: ₹{taxAmount}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 max-w-xl space-y-4">
              <h2 className="text-xl font-semibold">How to Use</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Enter your total income.</li>
                <li>Specify the tax rate applicable to you.</li>
                <li>Click on "Calculate Tax" to get the result.</li>
                <li>Useful for income planning, tax filing, and budgeting.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Why Use a Tax Calculator?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm">
              Tax calculators help individuals and businesses understand their tax liabilities based on income and tax rates. It simplifies financial planning and improves accuracy.
            </p>

            <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
              <h3 className="font-medium mb-2">Example Use Cases:</h3>
              <ul className="list-disc list-inside">
                <li>Estimate taxes before filing returns</li>
                <li>Plan budgets based on net income</li>
                <li>Compare different income scenarios</li>
              </ul>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/tools"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Explore More Tools on SmartBox
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxCalculator;
