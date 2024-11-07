import { css } from "@emotion/css";

// Color palette
export const colors = {
	primary: "#1e38b2", // Blue color
	secondary: "#fe5805", // Orange color
	background: "#eae6df", // Light background for a clean look
	text: "#333", // Dark text for readability
	lightText: "#555", // Lighter text for less important info
	border: "#ddd", // Border color for separation
	hoverBackground: "#f0f0f0", // Hover effect background
	buttonHover: "#005bb5", // Button hover color
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
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background-color: #fff;

	@media (max-width: 1024px) {
		flex: 1 1 calc(50% - 20px);
	}

	@media (max-width: 600px) {
		flex: 1 1 100%;
	}
`;

export const productTitleStyle = css`
	font-size: 18px;
	font-weight: 600;
	margin: 10px 0;
	color: ${colors.primary};
`;

export const productDescriptionStyle = css`
	font-size: 14px;
	color: ${colors.lightText};
	margin: 10px 0;
`;

// Button and interactive element styles
export const buttonContainerStyle = css`
	display: flex;
	gap: 10px;
	justify-content: space-between;
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
	}

	&:active {
		background-color: ${colors.buttonHover};
	}

	&:focus {
		outline: none;
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
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	margin: 0;
	padding: 0 20px;
	z-index: 999;
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

export const cartIconStyle = css`
	font-size: 24px;
	color: ${colors.primary};
`;
