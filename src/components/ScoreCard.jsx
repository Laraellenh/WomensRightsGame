import styles from "./ScoreCard.module.css";
import angryImage from "../images/angry.png";

const Scorecard = ({ points, questions }) => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.scoreImg} src={angryImage} alt="angry uterus" />
        <p className={styles.score}>
          Your Score is {points} points out of {questions.length}
        </p>
        <p className={styles.message}>
          Thats right! All these ridiculous laws are true!!{" "}
          <span
            style={{ fontStyle: "normal" }}
            role="img"
            aria-label="horrified emoji"
          >
            😱
          </span>
        </p>
      </div>
    </div>
  );
};

export default Scorecard;
