import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export default function Pagination() {
    return (
        <>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => console.log(event)}
                pageRangeDisplayed={6}
                pageCount={5}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
