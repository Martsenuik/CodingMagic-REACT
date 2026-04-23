import "./App.css";
import dropDownData from "../headerDropDown.json";
import { Header } from "./components/header/Header";
import { Popular } from "./components/popular/Popular";
import { Birthday } from "./components/birthday/Birthday";
import { Random } from "./components/random/Random";
import { TimeCalculator } from "./components/timeCalculator/TimeCalculator";
import { Football } from "./components/football/Football";
import { Numbers } from "./components/numbers/Numbers";
import { Footer } from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(true);
  }, []);
  return (
    <>
      {modalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close"></span>
            <p className="modal-text">Привіт!</p>
            <p className="modal-text">
              Ви потрапили на сайт інтерактивних ігор та завдань Надіємось, що
              вам сподобається і ви отримаєте позитивні емоції! Бажаємо Вам
              гарно провести час!
            </p>
            <p className="modal-text modal-ask">Введіть своє ім’я:</p>
            <div>
              {" "}
              <input
                type="name"
                id="guess-game-input"
                placeholder="Ваше ім’я..."
                className="modal-input"
              />
            </div>
            <div>
              {" "}
              <button
                className="modal-btn"
                id="myBtn"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}
      <Header dropDownData={dropDownData} />
      <Popular />
      <Birthday />
      <Random />
      <TimeCalculator />
      <Football />
      <Numbers />
      <Footer />
    </>
  );
}

export default App;
