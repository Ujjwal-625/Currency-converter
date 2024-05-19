import React from "react";
import { useId } from "react";
function Input({
  //props object destructuring
  label,
  amount,
  onamountchange,
  oncurrencychange,
  selectcurrency = "usd",
  currencyoptions = [],
  amountdisable = false,
  currencydisable = false,

  className = "",
}) {
    const inputId=useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
            id={inputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onamountchange && onamountchange(Number(e.target.value))
          } //it will first check it exits or not
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencydisable}
          value={selectcurrency}
          onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
        >
          {currencyoptions.map((e) => {
            return <option key={e} value={e}>{e}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default Input;
