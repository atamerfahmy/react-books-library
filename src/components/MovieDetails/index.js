import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"
import image from "../../assets/default-river.png";

function MovieDetails() {

    let params = useParams();
    const [data, setData] = useState({});

    let obj = {
        0: "Currently Reading",
        1: "Want To Read",
        2: "Read"
    }
    
    useEffect(() => {
        fetch(`https://openlibrary.org/books/${params.id}.json`)
            .then((response) => response.json())
            .then((res) => {
                setData(res)
            });
    }, [params])

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.card_image} src={image} alt="Avatar" style={{ width: "100%" }} />
            </div>
            <div className={styles.text_container}>
                <div className={[styles.flex_space_between]}>
                    <h2>{data.title}</h2>
                    
                    <div className={styles.circle_container}>
                        <div className={styles.circle}></div>
                        <p className={styles.date}>{obj[params.sectionNumber]}</p>
                    </div>                    
                </div>
                <div className={styles.flex}>
                    <p>{data.by_statement?.split(";")[0]}</p>
                    <p className={styles.ml}>{data.publishers}</p>
                </div>
                <div className={styles.flex_middle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event" viewBox="0 0 16 16">
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg>                    
                    <p className={styles.date}>{data.publish_date}</p>
                </div>
                <p>
                    {data.subtitle}
                </p>
            </div>
        </div>
    )

}

export default MovieDetails;