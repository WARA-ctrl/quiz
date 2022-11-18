import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../Data/QuestionData";

const Score = () => {
  const { score, setAppState } = useContext(DataContext);

  return (
    <div className="score">
      <h1>Score Component</h1>
      <h1>{`${score} / ${QuestionsData.length}`}</h1>
      <div>
        <button onClick={() => setAppState("menu")}>Do it again!</button>
      </div>
    </div>
  );
};

export default Score;
