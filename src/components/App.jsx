import React, { useState } from 'react'
import "./App.css"
import Input from './input'
import useCurrencyInfo from "../hooks/currency";
const App=()=> {

    const [amount ,setamount]=useState(0);
    const [from,setFrom]=useState("usd");
    const [to,setto]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(0);

    const currinfo=useCurrencyInfo(from);
    const options=Object.keys(currinfo);

    const swap=()=>{
        setFrom(to);
        setto(from);
        setConvertedAmount(amount);
        setamount(setConvertedAmount);
    }
    const convert=()=>{
        setConvertedAmount(amount*currinfo[to]);
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                onamountchange={(amount)=>setamount(amount)}
                                selectcurrency={from}
                                oncurrencychange={(curr)=>{
                                    return setFrom(curr)
                                }
                                }
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyoptions={options}
                                onamountchange={(amnt)=>setConvertedAmount(amnt)}
                                selectcurrency={to}
                                oncurrencychange={(curr)=>setto(curr)}
                                amountdisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default App


