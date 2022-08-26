import React, { useState } from "react";
import "./Inputs.css";

import {Buttons} from "./Buttons";

export function Inputs() {
  
    const [peso = 50, setPeso] = useState()
    const [altura = 1.95, setAltura] = useState()
    const [result, setResult] = useState("Esperando..")
    const [resultado, setResultado] = useState()
    
    const IMC = () => {
      const imc = peso / (altura * altura)
      const formatImc = imc.toFixed(2)
      let condition
      if (formatImc <= 18.5) {
        condition = "Abaixo do Peso";
      } else if (formatImc <= 24.9) {
        condition = "Peso Normal";
      } else if (formatImc <= 29.9) {
        condition = "Sobrepeso";
      } else if (formatImc <= 34.9) {
        condition = "Obesidade Grau I";
      } else if (formatImc <= 39.9) {
        condition = "Obesidade Grau II";
      } else if (formatImc > 40) {
        condition = "Obesidade Mórbida";
      }
      setResult(+formatImc)
      setResultado(condition)
      
     }

  
  return (
    <div id="inputs">
      <div className="formatInput">
        <div className="formatCard">
          <p>Peso</p>
          <p className="formatValue">{peso}Kg</p>
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
          <p className="formatValue">{altura}m</p>
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
          <button onClick={IMC}>Calcular</button>
        </div>
      </div>
      <h2>IMC: {result} {resultado} </h2>
    </div>
  );
}
