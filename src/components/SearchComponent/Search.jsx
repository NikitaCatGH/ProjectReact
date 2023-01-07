import React from "react";
import styles from "./Search.module.scss";
console.log(styles.input);

export default function Search({ searchValue, setSearchValue }) {
    console.log("searchJSX", searchValue);
    return (
        <div className="styles.root">
            <input
                className={styles.input}
                placeholder="Поиск пиццы"
                value={searchValue}
                onInput={(e) => {
                    setSearchValue(e.target.value);

                    // console.log(searchValue);
                }}
            />

            <svg
                onClick={() => setSearchValue("")}
                className={styles.clearIcon}
                viewPort="0 0 12 12"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="1"
                    y1="11"
                    x2="11"
                    y2="1"
                    stroke="black"
                    strokeWidth="2"
                />
                <line
                    x1="1"
                    y1="1"
                    x2="11"
                    y2="11"
                    stroke="black"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
