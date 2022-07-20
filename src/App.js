import { GameCard } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>
          You Can't{" "}
          <span style={{ fontWeight: "bold", color: "rgb(255, 105, 180)" }}>
            Be Serious
          </span>
          <span role="img" aria-label="head smack emoji">
            🤦‍♀️
          </span>
        </h1>
        <h2>Guess Which US Anti-Woman Laws Really Exist!</h2>
        <GameCard />
      </div>
    </div>
  );
}
