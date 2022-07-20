import styles from "./Footer.module.css";

const Scorecard = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={styles.containter}>
      <p>
        made by{" "}
        <a
          href="https://github.com/Laraellenh"
          target="_blank"
          rel="noreferrer"
        >
          LARA
        </a>{" "}
        and{" "}
        <a href="https://github.com/ian-wag" target="_blank" rel="noreferrer">
          IAN
        </a>{" "}
        &middot; {year}
      </p>
    </div>
  );
};

export default Scorecard;
