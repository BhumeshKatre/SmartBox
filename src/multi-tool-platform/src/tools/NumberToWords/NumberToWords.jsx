import React from 'react';

const NumberToWords = () => {
  const numberToWords = (num) => {
    // Function to convert number to words
    const belowTwenty = [
      'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
      'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
      'Eighteen', 'Nineteen'
    ];
    const tens = [
      '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
    ];
    const aboveHundred = ['Hundred', 'Thousand', 'Million', 'Billion'];

    if (num < 20) return belowTwenty[num];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + belowTwenty[num % 10] : '');
    if (num < 1000) return belowTwenty[Math.floor(num / 100)] + ' ' + aboveHundred[0] + (num % 100 !== 0 ? ' and ' + numberToWords(num % 100) : '');

    let i = 0;
    let words = '';
    while (num > 0) {
      if (num % 1000 !== 0) {
        words = numberToWords(num % 1000) + ' ' + aboveHundred[i] + ' ' + words;
      }
      num = Math.floor(num / 1000);
      i++;
    }
    return words.trim();
  };

  const [number, setNumber] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleConvert = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      setResult(numberToWords(num));
    } else {
      setResult('Please enter a valid number');
    }
  };

  return (
    <div>
      <h1>Number to Words Converter</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleConvert}>Convert</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default NumberToWords;