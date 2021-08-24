import { useState } from "react";
import convertToDecimal from "./convertToDecimal";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateValue, setStateValue] = useState("");
  const [buttonState, setButtonState] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input
            type="number"
            value={stateValue}
            onChange={(e) => setStateValue(e.target.value)}
          />
          <p>
            Binary number ******: {stateValue} ---- Decimal number ====*****:
            {buttonState}
          </p>
          <button
            onClick={() =>
              setButtonState(convertToDecimal(stateValue.split("")))
            }
          >
            Calculate Decimal Number
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
