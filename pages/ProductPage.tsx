import { useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";
import {
	containerStyle,
	titleStyle,
	productContainer,
	productCardStyle,
	productImageStyle,
	productNameStyle,
	productDescriptionStyle,
	addToCartButtonStyle,
} from "../styles/ProductPageStyles";
import CustomDropdown from "../components/CustomDropdown";

interface Product {
	id: string;
	alt_description: string;
	urls: { small: string };
}

export const dropdownOptions = [
    { value: "Sella", label: "Chair" },
    { value: "Mensa", label: "Table" },
    { value: "Lectus", label: "Bed" },
    { value: "Armarium", label: "Cabinet" },
];

const ProductPage: React.FC = () => {
	const [productData, setProductData] = useState<Product[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<{
		[key: string]: string;
	}>({});

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch(
					`https://api.unsplash.com/photos/random?query=chair&count=15`,
					{
						headers: {
							Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
						},
					}
				);
				const data = await response.json();

				if (Array.isArray(data)) {
					setProductData(data);
				} else {
					console.error("Expected data to be an array", data);
					setProductData([]);
				}
			} catch (error) {
				console.error("Error fetching images:", error);
				setProductData([]);
			}
		};
		fetchImages();
	}, []);

	const handleDropdownChange = (value: string, productId: string) => {
		setSelectedOptions((prev) => ({
			...prev,
			[productId]: value,
		}));
	};

	return (
		<div className={containerStyle}>
			<h1 className={titleStyle}>Product Gallery</h1>
			<div className={productContainer}>
				{productData.length > 0 ? (
					productData.map((product) => (
						<div key={product.id} className={productCardStyle}>
							<img
								src={product.urls.small}
								alt={product.alt_description}
								className={productImageStyle}
							/>
							<h2 className={productNameStyle}>
								{product.alt_description || "Furniture Product"}
							</h2>
							<p className={productDescriptionStyle}>
								Beautiful furniture piece perfect for modern design.
							</p>

							<CustomDropdown
								productId={product.id}
								selectedOption={selectedOptions[product.id]}
								onOptionChange={handleDropdownChange}
							/>

							<Button className={addToCartButtonStyle}>Add to Cart</Button>
						</div>
					))
				) : (
					<p>No products found.</p>
				)}
			</div>
		</div>
	);
};

export default ProductPage;
