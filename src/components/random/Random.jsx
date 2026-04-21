import "../../components/random/random.css";
import { useState } from "react";
import { handleChange } from "../../helpers/getValue";
import { INPUTandBTN } from "../INPUTandBTN";

export const Random = () => {
  const [color, setColor] = useState("");
  const [guessedNumber, setGuessedNumber] = useState("");
  const [result, setResult] = useState("");

  const [secretNumber] = useState(() => Math.floor(Math.random() * 100) + 1);

  const handleChangeGuessedNumber = (event) =>
    handleChange(setGuessedNumber, event);

  const checkGuess = () => {
    if (!guessedNumber) {
      setResult("");
      return;
    }

    const number = parseInt(guessedNumber, 10);

    if (number === secretNumber) {
      setResult(`Вітаю, ви вгадали число! (${secretNumber})`);
      setColor("green");
    } else if (number < secretNumber) {
      setResult("Спробуйте більше!");
      setColor("red");
    } else {
      setResult("Спробуйте менше!");
      setColor("red");
    }
  };

  return (
    <section className="random">
      <h2 className="title-random">Вгадай число, яке загадав комп’ютер</h2>

      <div className="random-box">
        <INPUTandBTN
          inputValue={guessedNumber}
          handleChange={handleChangeGuessedNumber}
          onClickBtn={checkGuess}
        />

        <div className="result-box">
          <p className="random-result" style={{ color }}>
            {result}
          </p>
        </div>
      </div>

      <div className="line-box">
        <hr className="random-line" />
      </div>
    </section>
  );
};
