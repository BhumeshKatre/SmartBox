import React, { useState } from "react";
import { calculateAge } from "./utils";
import { Helmet } from "react-helmet";
import SweetAlert from "../../components/SweetAlert";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculate = () => {
    if (!dob) return;
    const { fullAge } = calculateAge(dob);
    setAge(fullAge);
  };

  return (
    <>
      <Helmet>
        <title>Age Calculator | SmartBox</title>
      </Helmet> 

      <div className=" flex flex-col md:flex-row items-center justify-center px-4 py-10 bg-gray-50 text-gray-800">
        {/* Left: Calculator */}
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

        {/* Right: How to Use */}
        <div className="w-full md:w-1/2 max-w-xl mt-10 md:mt-0 md:ml-12 space-y-4">
          <h3 className="text-xl font-semibold">How to Use</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Select your Date of Birth from the calendar input.</li>
            <li>Click the "Calculate Age" button.</li>
            <li>Your age will appear instantly below the button.</li>
            <li>No data is saved. 100% private and secure.</li>
          </ul>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-800  text-center">
          What is an Age Calculator?
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
          An Age Calculator helps you quickly find out how old you are based on your date of birth.
          It’s useful for official forms, exams, or simply tracking birthdays — without needing to do manual calculations.
        </p>

        <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
          <h3 className="font-medium mb-2">Example Use Cases:</h3>
          <ul className="list-disc list-inside">
            <li>Form filling for exams or government documents</li>
            <li>Calculate age for job eligibility</li>
            <li>Tracking age for kids, pets, or elders</li>
            <li>Personal or business use without saving data</li>
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
      </section>
    </>
  );
}
