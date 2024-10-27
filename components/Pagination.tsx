import React from "react";
import { Button } from "@radix-ui/themes";
import {
    paginationContainer,
    paginationButton,
    paginationNumber,
} from "../styles/ProductPageStyles";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={paginationContainer}>
            <Button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={paginationButton}
            >
                Previous
            </Button>
            <div className={paginationNumber}>
                Page {currentPage} of {totalPages}
            </div>
            <Button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={paginationButton}
            >
                Next
            </Button>
        </div>
    );
};

export default Pagination;
