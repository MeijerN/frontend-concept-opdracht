import styles from './Footer.module.css'
import React from 'react';


function Footer() {
    return (
        <footer className={styles.footer}>
            <h6 className={styles["footer-text"]}>In opdracht van NOVI Hogeschool © 2022</h6>
        </footer>
    );
}

export default Footer;
