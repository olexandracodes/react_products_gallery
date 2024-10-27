import React from "react";
import { IconButton } from "@radix-ui/themes";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";

import {
	paginationContainer,
	paginationButton,
	paginationIcon,
} from "../styles/ProductPageStyles";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	return (
		<div className={paginationContainer}>
			<IconButton
				onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
				disabled={currentPage === 1}
				className={paginationButton}
			>
				<CaretLeftIcon className={paginationIcon} />
			</IconButton>
			<div>
				Page {currentPage} of {totalPages}
			</div>
			<IconButton
				onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
				disabled={currentPage === totalPages}
				className={paginationButton}
			>
				<CaretRightIcon className={paginationIcon} />
			</IconButton>
		</div>
	);
};

export default Pagination;
