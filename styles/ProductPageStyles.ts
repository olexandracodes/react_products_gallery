import { css } from "@emotion/css";

// Color palette
export const colors = {
	primary: "#1e38b2",
	secondary: "#fe5805",
	background: "#eae6df",
	text: "#333",
	lightText: "#555",
	border: "#ddd",
	hoverBackground: "#f0f0f0",
	buttonHover: "#005bb5",
};

// General container styles
export const containerStyle = css`
	padding: 20px;
	font-family: Arial, sans-serif;
	background-color: ${colors.background};
`;

export const headerStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const titleStyle = css`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 20px;
	color: ${colors.primary};
`;

// Product card styles
export const productContainer = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const productCardStyle = css`
	flex: 1 1 calc(30% - 20px);
	margin: 10px;
	border: 1px solid ${colors.border};
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

	@media (max-width: 1024px) {
		flex: 1 1 calc(50% - 20px);
	}

	@media (max-width: 600px) {
		flex: 1 1 100%;
	}
`;

export const productImageStyle = css`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 5px;
`;

export const productNameStyle = css`
	font-size: 20px;
	font-weight: 600;
	margin: 10px 0;
	color: ${colors.primary};
`;

export const productDescriptionStyle = css`
	font-size: 14px;
	color: ${colors.lightText};
`;

// Button and interactive element styles
export const buttonContainerStyle = css`
	display: flex;
	gap: 10px;
	justify-content: flex-start;
	margin-top: 15px;
`;

export const buttonStyle = css`
	padding: 10px 20px;
	background-color: ${colors.secondary};
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color 0.3s, transform 0.3s;
	font-weight: 600;
	font-size: 14px;

	&:hover {
		background-color: ${colors.buttonHover};
		transform: translateY(-2px);
	}

	&:active {
		background-color: ${colors.buttonHover};
		transform: translateY(1px);
	}

	&:focus {
		outline: none;
	}
`;

export const addToCartButtonStyle = css`
	padding: 10px 20px;
	background-color: ${colors.primary};
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${colors.buttonHover};
	}
`;

// Carousel styles
export const carouselWrapperStyle = css`
	max-width: 300px;
	margin: 0 auto;
`;

export const imageStyle = css`
	width: 100%;
	height: 210px;
	object-fit: cover;
	border-radius: 5px;
`;

// Select and filter styles
export const selectContainerStyle = css`
	width: 120px;
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
`;

export const selectItem = css`
	padding: 10px;
	color: ${colors.text};
	cursor: pointer;
	flex: 1;
	&:hover {
		background-color: ${colors.hoverBackground};
	}
`;

// Pagination styles
export const paginationContainer = css`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`;

export const paginationButton = css`
	margin: 0 10px;
	border: none;
	background-color: ${colors.background};
	color: ${colors.primary};
	padding: 10px;
	border-radius: 50%;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: ${colors.hoverBackground};
	}
`;

export const paginationIcon = css`
	width: 16px;
	height: 16px;
	color: ${colors.primary};
`;

// Cart icon style
export const cartIconStyle = css`
	color: ${colors.secondary};
	font-size: 24px;
	margin: 0 10px;
	cursor: pointer;
`;
