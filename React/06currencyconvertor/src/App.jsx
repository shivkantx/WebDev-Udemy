import { useState } from "react";
import backgroundImage from "./assets/currency.jpeg";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="h-screen w-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-200 rounded-xl p-6 backdrop-blur-md bg-white/30 shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
              selectedCurrency={from}
            />
          </div>

          <div className="relative w-full my-4">
            <button
              type="button"
              className="z-10 mb-4 absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                         border-2 border-white rounded-md bg-blue-600
                         text-white px-3 py-1 shadow-md hover:bg-blue-700 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox
              label="To"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={setTo}
              selectedCurrency={to}
              amountDisabled
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            type="submit"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
