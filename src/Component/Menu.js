import { useContext } from "react";
import { DataContext } from "../App";

const Menu = () => {
  const { setAppState, setScore } = useContext(DataContext);
  return (
    <div className="menu">
      <h1>Let's quiz!</h1>
      <button
        onClick={() => {
          setAppState("quiz");
          setScore(0);
        }}
      >
        Start test
      </button>
    </div>
  );
};

export default Menu;
