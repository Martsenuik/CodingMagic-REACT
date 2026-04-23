import "../../components/calculator/calculator.css";
import { useState } from "react";
// import { handleChange } from "../../helpers/getValue";

export const Calculator = () => {
  //   const [inputNumber1, setNumber1] = useState("");
  //   const [inputNumber2, setNumber2] = useState("");
  //   const [result, setResult] = useState("");

  //   const handleChangeNum1 = (event) => handleChange(setNumber1, event);
  //   const handleChangeNum2 = (event) => handleChange(setNumber2, event);

  //   const CalculateNumbers = () => {};

  return (
    <sectoin className="calculator-section">
      <h2 className="title">Калькулятор</h2>
      <div className="calculator">
        <input
          className="input"
          type="number"
          //   value={number1}
          //   onChange={handleChangeNum1}
        />
        <div className="boxSymbols">
          <button className="addition symbol">+</button>
          <button className="multiplication symbol">*</button>
          <button className="subtraction symbol">-</button>
          <button className="divison symbol">/</button>
        </div>
        <input
          className="input"
          type="number"
          //   value={number2}
          //   onChange={handleChangeNum2}
        />
        <button className="epualTo symbol">=</button>
        <input className="input" type="number" />
      </div>
      <div className="line-box">
        <hr className="line" />
      </div>
    </sectoin>
  );
};
