import {useId} from 'react'

function InputBox({
    label,  // from or to
    amount,
    onAmountChange, //method 
    currencyOptions = [],
    selectCurrency = "usd",
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
    className = "", //to enable passing of extra classname
}) {
    const amtId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amtId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input 
                    id={amtId}  //for binding label with the input, it optimises the code
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    //this fires a event on change 
                    //runs only if the method exists and is not null eqv to `if (onAmountChange) onAmountChange();`
                    //js always returns string, so we wrap it in number
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/^0+(?=\d)/, "");
                    }} //to prevent additional zero
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >  
                        {currencyOptions.map((currency) => (    //use first bracket as it will be the return value
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