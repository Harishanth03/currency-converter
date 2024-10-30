import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [amount , setAmount] = useState(1);

  const [fromCurrency , setFromCurrency] = useState("USD");

  const [toCurrency , setToCurrency] = useState("LKR");

  const [convertedAmount , setConvertedAmount] = useState(null);

  const [exchangeRate , setExchangeRate] = useState(null);

  useEffect(() => {

    const getExchangeRate = async () => {
      
      try
      {
        let URL = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        const response = await axios.get(URL);

        //console.log(response);

        setExchangeRate(response.data.rates[toCurrency]);
      }
      catch(error)
      {
        console.log("The error message is: " , error)
      };

    };

    getExchangeRate();

  }, [fromCurrency , toCurrency]);

  useEffect(() => {

    if(exchangeRate !== null)
    {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }

  } , [amount , exchangeRate])

  const handleAmountChange = (e) => 
  {
    const value = parseFloat(e.target.value);

    setAmount(isNaN(value) ? 0 : value);
  }

  return (
    <>
      <div className="currency-converter">

        <div className="box"></div>

        <div className="data">

          <h1>Currency Converter</h1>

          <div className="input-container">

            <label htmlFor="Amount">Amount: </label>

            <input type="number" value={amount} onChange={handleAmountChange} id='Amount'/>

          </div>

          <div className="input-container">

            <label htmlFor="FromCurrency">From Currency </label>

            <select id="FromCurrency" value={fromCurrency} onChange={(e) => {setFromCurrency(e.target.value)}}>

              <option value="USD">USD - United Status Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="LKR">LKR - Srilankan Rupee</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>

            </select>

          </div>

          <div className="input-container">

            <label htmlFor="ToCurrency">To Currency </label>

            <select id="ToCurrency" value={toCurrency} onChange={(e) => {setToCurrency(e.target.value)}}>

              <option value="USD">USD - United Status Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="LKR">LKR - Srilankan Rupee</option>
              <option value="GBP">GBP - British Pound Sterling</option>
              <option value="JPY">JPY - Japanese Yen</option>
              <option value="AUD">AUD - Australian Dollar</option>
              <option value="CAD">CAD - Canadian Dollar</option>
              <option value="CNY">CNY - Chinese Yuan</option>
              <option value="INR">INR - Indian Rupee</option>
              <option value="BRL">BRL - Brazilian Real</option>
              <option value="ZAR">ZAR - South African Rand</option>

            </select>

          </div>

          <div className="results">
            <p> {amount} {fromCurrency} is Equal to {convertedAmount} {toCurrency}</p>
          </div>

        </div>

      </div>

    </>

  )

}

export default App
