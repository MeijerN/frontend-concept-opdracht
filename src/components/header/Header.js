import styles from './Header.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";

function Header({children}) {
    return (
            <header className={styles.header}>
                <div className={styles["header-content"]}>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <NavLink className={styles.navlink} to="">hottest posts</NavLink>
                            <NavLink  className={styles.navlink} to="">reddit</NavLink>
                            <NavLink  className={styles.navlink} to="">memes</NavLink>
                        </ul>
                    </nav>
                    <div className={styles["dynamic-content"]}>
                        {children}
                    </div>

                </div>
            </header>
    );
}

export default Header;
