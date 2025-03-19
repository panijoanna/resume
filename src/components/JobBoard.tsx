"use client";
import styles from "../styles/JobBoard.module.css";
import CardFormModal from "./CardFormModal";

const JobBoard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>My Job Board</h1>
        <div className={styles.itemContainer}>
          <ul className={styles.list}>
            <li className={styles.listItem}>All applications</li>
            <li className={styles.listItem}>Applied</li>
            <li className={styles.listItem}>Interview</li>
            <li className={styles.listItem}>Offer</li>
            <li className={styles.listItem}>Rejected</li>
          </ul>
          <div className={styles.buttonContainer}>
            <CardFormModal />
          </div>
        </div>
      </div>
      <div className={styles.labelContainer}></div>
    </div>
  );
};

export default JobBoard;
