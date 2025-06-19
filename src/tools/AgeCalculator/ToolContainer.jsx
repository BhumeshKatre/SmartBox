import React from 'react';

const ToolContainer = () => {
  return (
    <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
      <h2 className="text-2xl font-bold text-blue-600">Age Calculator</h2>
      <input
        type="date"
        className="p-3 border rounded w-full"
        max={new Date().toISOString().split("T")[0]}
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button
        onClick={handleCalculate}
        aria-label="Calculate your age"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Age
      </button>

      {age !== null && (
        <div className="text-green-600 font-semibold text-center">
          <SweetAlert data={age} />
        </div>
      )}
    </div>
  );
}

export default ToolContainer;
