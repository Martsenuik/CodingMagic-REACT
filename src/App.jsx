import "./App.css";
import dropDownData from "./headerDropDown.json";
import { Header } from "./components/Header";
import { Popular } from "./components/Popular";
import { Birthday } from "./components/Birthday";
import { Random } from "./components/Random";

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
