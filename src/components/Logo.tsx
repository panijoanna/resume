import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.iconWrapper}>
        <span className={styles.logoText}>R</span>
      </div>
      <span className={styles.text}>ResuME</span>
    </div>
  );
};

export default Logo;
