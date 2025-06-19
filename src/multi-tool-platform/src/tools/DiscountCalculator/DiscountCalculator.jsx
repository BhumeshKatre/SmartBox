import React, { useState } from 'react';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(price) && !isNaN(discount)) {
      const discountAmount = (price * discount) / 100;
      setFinalPrice(price - discountAmount);
    } else {
      setFinalPrice(null);
    }
  };

  return (
    <div>
      <h1>Discount Calculator</h1>
      <div>
        <label>
          Original Price:
          <input
            type="number"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Discount Percentage:
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateDiscount}>Calculate</button>
      {finalPrice !== null && (
        <h2>Final Price: ${finalPrice.toFixed(2)}</h2>
      )}
    </div>
  );
};

export default DiscountCalculator;