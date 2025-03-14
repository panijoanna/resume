import styles from "../styles/StatusBadge.module.css";

interface StatusBadgeProps {
  color: "green" | "orange" | "red";
}

const StatusBadge = ({ color }: StatusBadgeProps) => {
  return <div className={`${styles.status} ${styles[color]}`}></div>;
};

export default StatusBadge;
