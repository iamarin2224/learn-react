import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {   //as api call should only be made if currency is changes
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())  //as api response is usually in json
        .then((res) => setData(res[currency]))   //study the api call to understand this
    }, [currency])

    return data
}

export default useCurrencyInfo