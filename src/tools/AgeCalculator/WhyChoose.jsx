import React from 'react';

const WhyChoose = () => {
  return (

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
  );
}

export default WhyChoose;
