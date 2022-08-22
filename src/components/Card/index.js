import DropDownButton from "../DropDownButton";
import styles from "./Card.module.css"

import image from "../../assets/default-river.png";

function Card({ book, index }) {

    return (
        <div className={styles.card}>
            <img className={styles.card_image} src={image} alt="Avatar" style={{ width: "100%" }} />
            <DropDownButton index={index} />
            <div className={styles.card_container}>
                <h5>{book?.title}</h5>
                <p>{book?.author_name}</p>
            </div>
        </div>
    )
}

export default Card;