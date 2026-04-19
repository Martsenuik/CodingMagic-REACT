import { useState } from "react";
import svgSearch from "../images/svg/search.svg";
import "../css/birthday.css";

export const Birthday = () => {
  const [birthdayYear, setBirthdayYear] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  const handleChangeName = (event) => {
    setBirthdayYear(event.target.value);
  };

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
        <div className="box-input">
          <input
            className="birthday-input"
            type="number"
            placeholder="Введіть рік народження"
            value={birthdayYear}
            onChange={handleChangeName}
          />

          <button
            className="birthday-btn random-btn b-day-btn"
            onClick={WhichIsYear}
          >
            <img src={svgSearch} className="search-btn" alt="search" />
          </button>
        </div>

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
