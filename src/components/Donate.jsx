import styles from "./Donate.module.css";
const Donate = () => {
  return (
    <div className={styles.container}>
      <h2>
        Donate Your <span className={styles.money}>$$$$</span>
      </h2>
      <ul>
        <li>
          <a
            href="https://secure.everyaction.com/rV67rum-cUiJNSutYPDeUA2?sourceid=1235732"
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            {" "}
            NOW (National Organization for Women){" "}
          </a>
        </li>
        <li>
          <a
            href="https://abortionfunds.org/"
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            {" "}
            The National Network of Abortion Funds{" "}
          </a>
        </li>
        <li>
          <a
            href="https://votesaveamerica.com/donate/"
            target="_blank"
            rel="noreferrer"
            className={styles.links}
          >
            {" "}
            Vote Save America{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Donate;
