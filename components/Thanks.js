import styles from "../styles/Content.module.css";

const MallContent = () => {
  return (
    <div className={[styles.container, styles.contact].join(" ")}>
      <h2
        className={styles.title}
        style={{ textTransform: "initial" }}
      >
        Thank you for your application!
      </h2>
      <p>We will be in contact with you soon.</p>
    </div>
  );
};

export default MallContent;
