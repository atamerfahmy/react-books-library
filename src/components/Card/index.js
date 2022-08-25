import DropDownButton from "../DropDownButton";
import styles from "./Card.module.css"

import image from "../../assets/default-river.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SectionContext } from "../../context";

function Card({ book, index }) {

    const sectionNumber = useContext(SectionContext);

    return (
        <div className={styles.card}>
            <Link to={`/movie-details${book.seed[0]}/${sectionNumber}`}>
                <img className={styles.card_image} src={image} alt="Avatar" style={{ width: "100%" }} />
            </Link>
            <DropDownButton index={index} />
            <div className={styles.card_container}>
                <h5>{book?.title}</h5>
                <p>{book?.author_name}</p>
            </div>
        </div>
    )
}

export default Card;