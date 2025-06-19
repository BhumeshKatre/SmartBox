import React, { useState } from "react";

const LoanEMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (P && r && n) {
      const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiCalc.toFixed(2));
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">Loan EMI Calculator</h2>
            <p className="text-sm text-gray-600">
              Calculate your monthly EMI for any loan amount, interest rate, and tenure.
            </p>

            <input
              type="number"
              placeholder="Loan Amount (₹)"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Interest Rate (Annual %)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Tenure (Years)"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            <button
              onClick={calculateEMI}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Calculate EMI
            </button>

            {emi && (
              <div className="text-center text-lg font-semibold text-green-700 mt-4">
                Monthly EMI: ₹{emi}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 max-w-xl space-y-4">
            <h3 className="text-xl font-semibold">How to Use</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li>Enter the total loan amount.</li>
              <li>Enter the annual interest rate.</li>
              <li>Enter the loan tenure in years.</li>
              <li>Click on "Calculate EMI" to see monthly payments.</li>
              <li>No personal data is stored. 100% private.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold text-gray-800">What is an EMI Calculator?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
            A Loan EMI Calculator helps you easily determine the monthly installment amount for repaying a loan.
            It’s useful for home, car, education, or personal loan planning.
          </p>

          <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
            <h3 className="font-medium mb-2">Example Use Cases:</h3>
            <ul className="list-disc list-inside">
              <li>Plan your monthly home or car loan repayments</li>
              <li>Estimate total loan burden before applying</li>
              <li>Compare loan offers from different banks</li>
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
  );
};

export default LoanEMICalculator;
