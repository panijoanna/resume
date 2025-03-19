"use client";
import Link from "next/link";
import Logo from "./Logo";
import { Icon } from "@iconify/react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Logo />
      <nav className={styles.sidebarContainer}>
        <div className={styles.navItem}>
          <Link href="/infoboard" className={styles.navLink}>
            <Icon icon="radix-icons:dashboard" className={styles.navIcon} />
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
