import React from "react";
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>
            MyReads
        </h1>
    </div>
  );
}

export default Header;
