import { css } from "@emotion/css";

export const containerStyle = css`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

export const titleStyle = css`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const productContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const productCardStyle = css`
    flex: 1 1 calc(30% - 20px);
    margin: 10px;
    border: 1px solid #ddd;
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
    height: auto;
    border-radius: 5px;
`;

export const productNameStyle = css`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
`;

export const productDescriptionStyle = css`
    font-size: 14px;
    color: #555;
`;

export const selectContainerStyle = css`
    margin: 10px 0;
    display: flex;
    align-items: center;
    position: relative;
`;

export const selectItem = css`
    padding: 10px;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const addToCartButtonStyle = css`
    padding: 10px 20px;
    background-color: #0070f3;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #005bb5;
    }
`;
