import { createContext, useState } from "react";
import "./App.css";
import Menu from "./Component/Menu";
import Score from "./Component/Score";
import Quiz from "./Component/Quiz";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <DataContext.Provider value={{ appState, setAppState, setScore, score }}>
      <div className="App">
        {/* <h1>Have fun!!!</h1> */}
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
