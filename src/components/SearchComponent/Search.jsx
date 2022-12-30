import React from "react";
import styles from "./Search.module.scss";
console.log(styles.input);

export default function Search() {
    return (
        <div className="styles.root">
            <input className={styles.input} placeholder="Поиск пиццы" />
        </div>
    );
}
