import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export default function Pagination({
    pageLimit,
    pageCountN,
    setCurrentPage,
    currentPage,
}) {
    return (
        <>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => setCurrentPage(event.selected + 1)}
                pageRangeDisplayed={pageLimit}
                pageCount={pageCountN}
                previousLabel="<"
                renderOnZeroPageCount={null}
                forcePage={currentPage - 1}
            />
        </>
    );
}
