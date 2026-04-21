import { useState } from "react";
import svgSearch from "../../images/svg/Search.svg";
import "../../components/birthday/birthday.css";
import { handleChange } from "../../helpers/getValue";
import { INPUTandBTN } from "../INPUTandBTN";

export const Birthday = () => {
  const [birthdayYear, setBirthdayYear] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const handleChangeName = (event) => handleChange(setBirthdayYear, event);

  const WhichIsYear = () => {
    const year = Number(birthdayYear);

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      setResult("Ви народилися у високосний рік!");
      setColor("green");
    } else {
      setResult("Ви народилися не у високосний рік.");
      setColor("red");
    }
  };

  return (
    <section className="birthday">
      <h2 className="title-birthday">Перевір в який рік ти народився</h2>

      <div className="birthday-div">
        <INPUTandBTN
          inputValue={birthdayYear}
          handleChange={handleChangeName}
          onClickBtn={WhichIsYear}
        />

        <p className="birthday-text" style={{ color }}>
          {result}
        </p>
      </div>

      <div className="line-box">
        <hr className="line" />
      </div>
    </section>
  );
};
