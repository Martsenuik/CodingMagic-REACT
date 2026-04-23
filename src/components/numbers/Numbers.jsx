import "../../components/numbers/numbers.css";
import { useState, useEffect } from "react";
import { handleChange } from "../../helpers/getValue";

export const Numbers = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [result, setResult] = useState("");

  const handleChangeNum1 = (event) => handleChange(setNum1, event);
  const handleChangeNum2 = (event) => handleChange(setNum2, event);
  const handleChangeNum3 = (event) => handleChange(setNum3, event);

  useEffect(() => {
    if (num1 && num2 && num3) {
      const maxNumber = Math.max(Number(num1), Number(num2), Number(num3));
      setResult(maxNumber);
    }
  }, [num1, num2, num3]);

  return (
    <section className="numbers">
      <h2 className="numbers-title">Введіть 3 числа</h2>
      <input
        id="input1"
        type="number"
        className="numbers-input-1"
        placeholder="Введіть число"
        onChange={handleChangeNum1}
      />
      <input
        id="input2"
        type="number"
        className="numbers-input-2"
        placeholder="Введіть число"
        onChange={handleChangeNum2}
      />
      <input
        id="input3"
        type="number"
        className="numbers-input-3"
        placeholder="Введіть число"
        onChange={handleChangeNum3}
      />

      <p className="number-text result-one">
        Найбільше число, яке ви ввели - <span>{result}</span>
      </p>
      <div className="line-box">
        <hr className="random-line" />
      </div>
    </section>
  );
};
