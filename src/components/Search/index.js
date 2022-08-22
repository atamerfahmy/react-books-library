import React, { useEffect } from "react";
import Card from "../Card";
import styles from "./Search.module.css";
import Spinner from 'react-bootstrap/Spinner';

function Search({ isOpen, close, data, optimisedSearchHandler, setData, loading }) {

    useEffect(() => {
        return () => {
            setData([]);
        }
    }, [])

    console.log(data)

    return isOpen ? (
        <div>
            <div className={styles.container}>
                <button className={styles.back_button} onClick={() => close()}>
                    <i className={`bi bi-arrow-left ${styles.icon}`}></i>
                </button>

                {
                    loading && <Spinner animation="border" role="status"/>
                }
                <input className={styles.search_bar} type="text" placeholder="Search.." onChange={optimisedSearchHandler} />
            </div>
            <div className={styles.books_section}>
                {
                    data && data.map((book, i) => <Card key={i} book={book} index={i} />)
                }
            </div>
        </div>
    )
        :
        null

}

export default Search;