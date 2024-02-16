import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        <li>
          <a href="">our sectors.</a>
        </li>
        <li>
          <a href="">how we work.</a>
        </li>
        <li>
          <a href="">contact.</a>
        </li>
      </ul>
    </div>
  );
}
