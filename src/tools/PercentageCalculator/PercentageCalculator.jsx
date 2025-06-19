import React, { useState } from "react";

const PercentageCalculator = () => {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [percentage, setPercentage] = useState(null);

  const calculatePercentage = () => {
    if (total === 0) {
      setPercentage("Total cannot be zero");
    } else {
      const result = ((value / total) * 100).toFixed(2);
      setPercentage(`${result}%`);
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">Percentage Calculator</h2>
            <p className="text-sm text-gray-600">
              Find out what percentage a number is of another number.
            </p>
            <div className="space-y-3">
              <input
                type="number"
                className="w-full px-3 py-2 border rounded"
                value={value}
                placeholder='Enter Obt. Total Marks (e.g., 440)'
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <input
                type="number"
                placeholder="Enter Total Marks (e.g., 500)"
                className="w-full px-3 py-2 border rounded"
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
              />
              <button
                onClick={calculatePercentage}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Calculate Percentage
              </button>
              {percentage && (
                <div className="text-green-600 font-semibold text-center">
                  Result: {percentage}
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 max-w-xl space-y-4">
            <h3 className="text-xl font-semibold">How to Use</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Enter the Obtain markss (e.g., 440).</li>
              <li>Enter the total marks (e.g., 500).</li>
              <li>Click the "Calculate Percentage" button.</li>
              <li>You'll see what percentage the part is of the total.</li>
              <li>No sign-up required. Simple and secure.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">What is a Percentage Calculator?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
            A Percentage Calculator helps you determine what percentage one number is of another. It's useful for calculating scores, discounts, exam results, business data, and more.
          </p>

          <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
            <h3 className="font-medium mb-2">Example Use Cases:</h3>
            <ul className="list-disc list-inside">
              <li>Find what percentage you scored in exams</li>
              <li>Calculate business growth metrics</li>
              <li>Work out savings and discounts</li>
              <li>Useful for students, teachers, and professionals</li>
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

export default PercentageCalculator;
