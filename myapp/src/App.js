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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and rock the world
        </a>
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
