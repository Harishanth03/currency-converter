import './App.css'

function App() {

  return (
    <>
      <div className="currency-converter">

        <div className="box"></div>

        <div className="data">

          <h1>Currency Converter</h1>

          <div className="input-container">

            <label htmlFor="Amount">Amount: </label>

            <input type="number" id='Amount'/>

          </div>

          <div className="input-container">

            <label htmlFor="FromCurrency">From Currency </label>

            <select id="FromCurrency">

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

            <select id="ToCurrency">

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
            <p> 1 INR is Equal to 83.25 USD</p>
          </div>

        </div>

      </div>

    </>

  )

}

export default App
