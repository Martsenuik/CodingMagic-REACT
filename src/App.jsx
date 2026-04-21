import "./App.css";
import dropDownData from "../headerDropDown.json";
import { Header } from "./components/header/Header";
import { Popular } from "./components/popular/Popular";
import { Birthday } from "./components/birthday/Birthday";
import { Random } from "./components/random/Random";

function App() {
  return (
    <>
      <Header dropDownData={dropDownData} />
      <Popular />
      <Birthday />
      <Random />
    </>
  );
}

export default App;
