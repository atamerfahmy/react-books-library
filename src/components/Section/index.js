import React, { useEffect } from "react";
import Card from "../Card";
import DropDownButton from "../DropDownButton";
import styles from "./Section.module.css"

function Section({ title, books }) {

    // console.log({
    //     title,
    //     type: typeof books,
    //     books
    // });
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>


            <div className={styles.books_container}>
                {
                    books.length !== 0 && books.map((book, i) => <Card key={i} book={book} index={i}/>)
                }

                {
                    books.length === 0 && <div>
                        No Books in this section
                    </div>
                }
            </div>
        </div>
    );
}

export default Section;