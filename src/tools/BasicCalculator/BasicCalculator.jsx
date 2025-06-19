import React, { useState } from "react";

const BasicCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <section className="bg-gray-50 py-10 min-h-screen">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          Basic Calculator
        </h2>

        <div className="mb-4 border border-gray-300 rounded p-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-3   rounded text-xl mb-2"
          />
          <div className="text-right text-gray-600 text-lg">{result}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"].map((btn) => (
              <button
                key={btn}
                onClick={() =>
                  btn === "=" ? handleEqual() : handleClick(btn)
                }
                className="bg-blue-100 hover:bg-blue-200 p-3 text-lg font-semibold rounded"
              >
                {btn}
              </button>
            ))}
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-100 hover:bg-red-200 p-3 rounded text-lg font-medium"
          >
            Clear
          </button>
          <button
            onClick={handleDelete}
            className="col-span-2 bg-yellow-100 hover:bg-yellow-200 p-3 rounded text-lg font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default BasicCalculator;
