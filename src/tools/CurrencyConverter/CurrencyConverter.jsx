import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    if (!amount || isNaN(amount)) return;
    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await res.json();
      const rate = data.rates[toCurrency];
      setResult((amount * rate).toFixed(2));
    } catch (error) {
      console.error("Conversion failed", error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Converter UI */}
            <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">
                Currency Converter
              </h2>
              <p className="text-sm text-gray-600">
                Convert currency values in real-time using live exchange rates.
              </p>
              <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <div className="flex space-x-2">
                <select
                  className="w-1/2 border px-4 py-2 rounded"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
                <select
                  className="w-1/2 border px-4 py-2 rounded"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
              <button
                onClick={handleConvert}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Convert
              </button>
              {result && (
                <div className="text-green-600 font-medium text-center">
                  Converted Amount: {result} {toCurrency}
                </div>
              )}
            </div>

            {/* How to Use Section */}
            <div className="w-full md:w-1/2 max-w-xl space-y-4">
              <h3 className="text-xl font-semibold">How to Use</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Enter the amount you want to convert.</li>
                <li>Select the source and target currencies.</li>
                <li>Click the "Convert" button to get the result.</li>
                <li>Live exchange rates are used for accurate results.</li>
                <li>No account or data saving needed — 100% secure.</li>
              </ul>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              What is a Currency Converter?
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
              A currency converter allows you to instantly convert one currency
              to another using real-time exchange rates. It's useful for
              travelers, businesses, students, or anyone dealing with
              international payments.
            </p>

            <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
              <h3 className="font-medium mb-2">Example Use Cases:</h3>
              <ul className="list-disc list-inside">
                <li>Checking how much you’ll get before exchanging currency</li>
                <li>International shopping and comparison</li>
                <li>Helping students budget foreign study costs</li>
                <li>Quick daily conversions without login</li>
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

export default CurrencyConverter;



