import svgSearch from "../images/svg/search.svg";

export const INPUTandBTN = ({ inputValue, handleChange, onClickBtn }) => {
  return (
    <div className="box-input">
      <input
        className="birthday-input"
        type="number"
        placeholder="Введіть значення"
        value={inputValue}
        onChange={handleChange}
      />

      <button
        className="birthday-btn random-btn b-day-btn"
        onClick={onClickBtn}
      >
        <img src={svgSearch} className="search-btn" alt="search" />
      </button>
    </div>
  );
};
