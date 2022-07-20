import styles from "./ScoreCard.module.css";
import angryImage from "../../public/images/angry.png";

const Scorecard = ({ points, questions }) => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.scoreImg} src={angryImage} alt="angry uterus" />
        <p className={styles.score}>
          Your Score is {points} points out of {questions.length}
        </p>
        <p className={styles.message}>Can you believe it?</p>
      </div>
    </div>
  );
};

export default Scorecard;
