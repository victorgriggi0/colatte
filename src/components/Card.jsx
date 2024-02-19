import styles from "./Card.module.css";

export function Card(props) {
  return (
    <article className={styles.card}>
      <figure>
        <img src={props.image} alt="" />
      </figure>
      <h4>{props.title}</h4>
    </article>
  );
}
