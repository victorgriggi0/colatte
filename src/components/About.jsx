import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h2>how we work</h2>
        <p>each sector is unique, in absolutely everything</p>
        <a href="">saiba mais</a>
      </div>
      <div className={styles.image}>
        <img src="https://corhexa.com/png/700x470/191919" alt="" />
      </div>
    </div>
  );
}
