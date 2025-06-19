import React, { useState } from "react";
import { Helmet } from "react-helmet";

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (price && discount) {
      const discountedPrice = price - (price * discount / 100);
      setFinalPrice(discountedPrice.toFixed(2));
    }
  };

  return (
    <>
      <Helmet>
        <title>Discount Calculator - Save Money with SmartBox</title>
        <meta
          name="description"
          content="Quickly calculate your final price after applying a discount. Useful for shopping, budgeting, and planning using SmartBox Discount Calculator."
        />
        <meta name="keywords" content="discount calculator, price discount, final price calculator, shopping tool, SmartBox tools" />
        <link rel="canonical" href="https://smartbox.dev/tools/discount-calculator" />
      </Helmet>

      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-xl shadow space-y-4">
              <h1 className="text-2xl font-bold text-blue-600">Discount Calculator</h1>
              <p className="text-sm text-gray-600">
                Calculate the final price after applying a discount to the original price.
              </p>

              <input
                type="number"
                placeholder="Original Price (₹)"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                placeholder="Discount (%)"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />

              <button
                onClick={calculateDiscount}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Calculate Final Price
              </button>

              {finalPrice && (
                <div className="text-center text-lg font-semibold text-green-700 mt-4">
                  Final Price: ₹{finalPrice}
                </div>
              )}
            </div>

            <div className="w-full md:w-1/2 max-w-xl space-y-4">
              <h2 className="text-xl font-semibold">How to Use</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>Enter the product's original price.</li>
                <li>Enter the discount percentage offered.</li>
                <li>Click on "Calculate Final Price" to get your result.</li>
                <li>Helpful for shopping, budgeting, and sales planning.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold text-gray-800">What is a Discount Calculator?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm">
              A discount calculator helps you quickly compute the final price after applying a given percentage discount.
              It’s widely used by shoppers and retailers to calculate savings or sale prices.
            </p>

            <div className="mt-8 text-sm text-gray-700 max-w-xl mx-auto">
              <h3 className="font-medium mb-2">Example Use Cases:</h3>
              <ul className="list-disc list-inside">
                <li>Calculate price during seasonal or flash sales</li>
                <li>Track discount margins for retail pricing</li>
                <li>Compare discounts offered by different stores</li>
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

export default DiscountCalculator;
