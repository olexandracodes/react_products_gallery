import { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import {
	containerStyle,
	titleStyle,
	productCardStyle,
	productImageStyle,
	productNameStyle,
	productDescriptionStyle,
	selectContainerStyle,
	addToCartButtonStyle,
} from "../styles/ProductPageStyles";

interface Product {
	id: string;
	alt_description: string;
	urls: { small: string };
}

const ProductPage: React.FC = () => {
	const [productData, setProductData] = useState<Product[]>([]);
	const [selectedOption, setSelectedOption] = useState<string>("");

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch(
					`https://api.unsplash.com/photos/random?query=chair&count=5`,
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

	return (
		<div className={containerStyle}>
			<h1 className={titleStyle}>Product Gallery</h1>
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

						<Select.Root onValueChange={(value) => setSelectedOption(value)}>
							<Select.Trigger className={selectContainerStyle}>
								{selectedOption || "Select an option"}
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="size">Size</Select.Item>
								<Select.Item value="color">Color</Select.Item>
							</Select.Content>
						</Select.Root>

						<button className={addToCartButtonStyle}>Add to Cart</button>
					</div>
				))
			) : (
				<p>No products found.</p>
			)}
		</div>
	);
};

export default ProductPage;
