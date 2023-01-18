import React from "react";
import { SearchContext } from "../../App";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
console.log(styles.input);

export default function Search() {
    const [localValue, setLocalValue] = React.useState("");
    const { setSearchValue } = React.useContext(SearchContext);
    const inputRef = React.useRef();
    //console.log("searchJSX", searchValue);

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 300),
        []
    );

    return (
        <div className="styles.root">
            <input
                ref={inputRef}
                className={styles.input}
                placeholder="Поиск пиццы"
                value={localValue}
                onInput={(e) => {
                    setLocalValue(e.target.value);
                    updateSearchValue(e.target.value); //sadsadsadsa

                    // console.log(searchValue);
                }}
            />

            <svg
                onClick={() => {
                    setSearchValue("");
                    setLocalValue("");
                    inputRef.current.focus();
                }}
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
