import { useState } from "react";
import { handleChange } from "../../helpers/getValue";
import { INPUTandBTN } from "../INPUTandBTN";
import "../../components/timeCalculator/timeCalculator.css";

export const TimeCalculator = () => {
  const [userNumber, setUserNumber] = useState("");
  const [result, setResult] = useState("");

  const handleChangeNumber = (event) => handleChange(setUserNumber, event);

  const calculateTime = () => {
    if (userNumber) {
      const totalSeconds = parseInt(userNumber, 10);
      const days = Math.floor(totalSeconds / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setResult(`${days} дн. ${hours}:${minutes}:${seconds}`);
    } else {
      setResult("...");
    }
  };
  return (
    <section data-sect="numerical" className="time_calculator">
      <h3 className="title-random">Калькулятор часу</h3>
      <div className="time-calculator-container">
        <INPUTandBTN
          inputValue={userNumber}
          handleChange={handleChangeNumber}
          onClickBtn={calculateTime}
        />

        <div className="dots-result-box">
          <div className="time-dots">------------------------- {result}</div>
          <span id="time-calculator-result">...</span>
        </div>
      </div>
    </section>
  );
};
