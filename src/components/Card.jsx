import styles from "./Card.module.css";

export function Card() {
  return (
    <article className={styles.card}>
      <figure>
        <img src="https://corhexa.com/png/500x500/191919" alt="" />
      </figure>
      <h4>unknown</h4>
    </article>
  );
}
