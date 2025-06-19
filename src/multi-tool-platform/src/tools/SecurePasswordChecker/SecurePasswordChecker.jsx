import React, { useState } from 'react';

const SecurePasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    let strength = 'Weak';
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChars].filter(Boolean).length;

    if (password.length >= 8 && criteriaMet === 4) {
      strength = 'Strong';
    } else if (password.length >= 6 && criteriaMet >= 3) {
      strength = 'Medium';
    }

    return strength;
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(checkPasswordStrength(newPassword));
  };

  return (
    <div>
      <h2>Secure Password Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p>Password Strength: {strength}</p>
    </div>
  );
};

export default SecurePasswordChecker;