import React from "react";
import styles from "./FloatingButton.module.css"

function FloatingButton({ open }) {

    return (
        <button onClick={() => open()} className={styles.float}>
            <i className={`bi bi-plus ${styles.my_float}`}></i>
        </button>
    )

}

export default FloatingButton;