import React from 'react';

const HowToUse = () => {
  return (
    <div className="w-full md:w-1/2 max-w-xl mt-10 md:mt-0 md:ml-12 space-y-4">
      <h3 className="text-xl font-semibold">How to Use</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        <li>Select your Date of Birth from the calendar input.</li>
        <li>Click the "Calculate Age" button.</li>
        <li>Your age will appear instantly below the button.</li>
        <li>No data is saved. 100% private and secure.</li>
      </ul>
    </div>
  );
}

export default HowToUse;
