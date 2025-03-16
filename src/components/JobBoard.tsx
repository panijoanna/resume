"use client";
import styles from "../styles/JobBoard.module.css";
import StatusBadge from "./StatusBadge";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const JobBoard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Moja tablica</h1>
        <div className={styles.itemContainer}>
          <ul className={styles.list}>
            <li className={styles.listItem}>wszystkie aplikacje</li>
            <li className={styles.listItem}>w trakcie rekrutacji</li>
            <li className={styles.listItem}>odrzucone aplikacje</li>
            <li className={styles.listItem}>oczekujące aplikacje</li>
          </ul>
          <div className={styles.buttonContainer}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              endIcon={<AddIcon fontSize="small" />}
            >
              Utwórz etykietę
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.labelContainer}></div>
      <div className={styles.statusContainer}>
        <StatusBadge color="green" />
        <span className={styles.text}>w trakcie rekrutacji</span>
        <StatusBadge color="orange" />
        <span className={styles.text}>oczekujące aplikacje</span>
        <StatusBadge color="red" />
        <span className={styles.text}>odrzucone aplikacje</span>
      </div>
    </div>
  );
};

export default JobBoard;
