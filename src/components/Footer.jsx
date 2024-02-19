import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        curious to know more about us? we'd love to hear from you, so don't
        hesitate to get in touch.
      </p>
      <div className={styles.supporting}>
        <span>emailadress@domain.com</span>
        <span>phone: +55 (00) 90000 - 0000</span>
      </div>
      <div className={styles.image}>
        <a href="">
          <img src="https://corhexa.com/png/500x500/EEEEEE" alt="" />
        </a>
        <a href="">
          <img src="https://corhexa.com/png/500x500/EEEEEE" alt="" />
        </a>
      </div>
    </footer>
  );
}
