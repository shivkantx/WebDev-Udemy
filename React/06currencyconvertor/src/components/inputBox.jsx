import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/30 backdrop-blur-md shadow-md p-4 ${className}`}
    >
      {/* Left: Label + Input */}
      <div className="flex flex-col w-1/2">
        <label
          htmlFor={id}
          className="mb-1 text-sm font-semibold text-gray-800 tracking-wide"
        >
          {label}
        </label>
        <input
          id={id}
          type="number"
          placeholder="Enter amount"
          disabled={amountDisabled}
          value={amount}
          // pass raw string instead of Number
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Right: Currency Dropdown */}
      <div className="flex flex-col w-1/2 items-end">
        <span className="mb-1 text-sm font-semibold text-gray-800 tracking-wide">
          Currency Type
        </span>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="w-full md:w-auto rounded-lg border border-gray-300 bg-white px-3 py-2 font-medium text-gray-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition cursor-pointer"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
