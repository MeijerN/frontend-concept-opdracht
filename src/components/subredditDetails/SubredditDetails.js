import styles from './SubredditDetails.module.css'
import React from 'react';
import formatNumbers from "../../helpers/formatNumbers";

function SubredditDetails({title, description, subscribers}) {
    return (
        <>
            <h2 className={styles.h2}>Title</h2>
            <p className={styles.p}>{title}</p>
            <h2 className={styles.h2}>Description</h2>
            <p className={styles.p}>{description}</p>
            <h2 className={styles.h2}>Number of subscribers</h2>
            <p className={styles.p}>{formatNumbers(subscribers)}</p>
        </>
    );
}

export default SubredditDetails;
