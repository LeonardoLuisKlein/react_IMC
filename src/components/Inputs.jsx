import React, { useState } from "react";
import "./Inputs.css";

import { Buttons } from "./Buttons";

export function Inputs() {
  
    const [peso = 50, setPeso] = useState()
    const [altura = 1.95, setAltura] = useState()



  return (
    <div id="inputs">
      <div className="formatInput">
        <div className="formatCard">
          <p>Peso</p>
          <p className="formatValue">{peso}</p>
        </div>
        <input
          type="range"
          min="10"
          max="180"
          id="peso"
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div className="formatInput">
        <div className="formatCard">
          <p>Altura</p>
          <p className="formatValue">{altura}</p>
        </div>
        <input
          type="range"
          min="1.00"
          max="2.50"
          step="0.01"
          id="altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <div>
          <Buttons />
        </div>
      </div>
      <h2>IMC: Teste</h2>
    </div>
  );
}
