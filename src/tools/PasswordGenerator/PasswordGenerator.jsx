import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    if (includeUppercase) chars += uppercaseChars;
    if (includeLowercase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    if (chars === "") {
      alert("Please select at least one character type!");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <>
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Generator UI */}
            <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">
                Password Generator
              </h2>
              <p className="text-sm text-gray-600">
                Generate strong, secure passwords with customizable options.
              </p>

              {/* Password Display */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={password}
                  readOnly
                  className="w-full border px-4 py-2 rounded"
                  placeholder="Generated password will appear here"
                />
                <button
                  onClick={copyToClipboard}
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  title="Copy to clipboard"
                >
                  📋
                </button>
              </div>

              {/* Length Slider */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password Length: {length}
                </label>
                <input
                  type="range"
                  min="4"
                  max="32"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Options */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="rounded"
                  />
                  <span>Include Uppercase (A-Z)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="rounded"
                  />
                  <span>Include Lowercase (a-z)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="rounded"
                  />
                  <span>Include Numbers (0-9)</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="rounded"
                  />
                  <span>Include Symbols (!@#$%^&*)</span>
                </label>
              </div>

              <button
                onClick={generatePassword}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Generate Password
              </button>
            </div>

            {/* How to Use Section */}
            <div className="w-full md:w-1/2 max-w-xl space-y-4">
              <h3 className="text-xl font-semibold">How to Use</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Adjust the password length using the slider (4-32 characters)</li>
                <li>Select which character types to include in your password</li>
                <li>Click "Generate Password" to create a new password</li>
                <li>Use the copy button to copy the password to your clipboard</li>
                <li>Generate new passwords as needed for different accounts</li>
              </ul>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Why Use a Password Generator?
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-2 text-sm">
              A password generator helps you create strong, unique passwords that are difficult to guess or crack. 
              Using strong passwords is essential for protecting your online accounts and personal information.
            </p>

            <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
              <h3 className="font-medium mb-2">Password Security Tips:</h3>
              <ul className="list-disc list-inside">
                <li>Use different passwords for different accounts</li>
                <li>Make passwords at least 12 characters long</li>
                <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
                <li>Never share your passwords with anyone</li>
                <li>Consider using a password manager for better security</li>
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

export default PasswordGenerator; 