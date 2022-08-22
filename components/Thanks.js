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
    <div className="backBtnContainer">
    <button
      type="button"
      className="button back-btn"
      onClick={() => handleBackBtn()}
    >
      <span className="heading">&lt; Back</span>
    </button>
  </div>
  );
};

export default MallContent;
