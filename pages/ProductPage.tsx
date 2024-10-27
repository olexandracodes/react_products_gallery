import React, { useEffect, useState } from "react";
import { Spinner, Button } from "@radix-ui/themes";
import {
	containerStyle,
	titleStyle,
	productContainer,
	productCardStyle,
} from "../styles/ProductPageStyles";
import ProductCarousel from "../components/ProductCarousel";
import CustomDropdown from "../components/CustomDropdown";
import Pagination from "../components/Pagination";

interface Product {
	id: string;
	alt_description: string;
	urls: string[];
}

export const dropdownOptions = [
	{ value: "Sella", label: "Chair" },
	{ value: "Mensa", label: "Table" },
	{ value: "Lectus", label: "Bed" },
	{ value: "Armarium", label: "Cabinet" },
];

const PRODUCTS_PER_PAGE = 12;

const ProductPage: React.FC = () => {
	const [productData, setProductData] = useState<Product[]>([]);
	const [selectedOptions, setSelectedOptions] = useState<{
		[key: string]: string;
	}>({});
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const [chairResponse, tableResponse, bedResponse] = await Promise.all([
					fetch(`https://api.unsplash.com/photos/random?query=chair&count=15`, {
						headers: {
							Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
						},
					}),
					fetch(`https://api.unsplash.com/photos/random?query=table&count=15`, {
						headers: {
							Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
						},
					}),
					fetch(`https://api.unsplash.com/photos/random?query=bed&count=15`, {
						headers: {
							Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
						},
					}),
				]);

				if (!chairResponse.ok || !tableResponse.ok || !bedResponse.ok) {
					const errorMessage = await chairResponse.text();
					throw new Error(errorMessage);
				}

				const chairs = await chairResponse.json();
				const tables = await tableResponse.json();
				const beds = await bedResponse.json();

				const products = chairs.map((chair: any, index: number) => ({
					id: `product-${index}`,
					alt_description: chair.alt_description || "Furniture Product",
					urls: [
						chair.urls.small,
						tables[index]?.urls.small || "",
						beds[index]?.urls.small || "",
					],
				}));

				setProductData(products);
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

	const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
	const currentProducts = productData.slice(
		startIndex,
		startIndex + PRODUCTS_PER_PAGE
	);
	const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

	return (
		<div className={containerStyle}>
			<h1 className={titleStyle}>Product Gallery</h1>
			<div className={productContainer}>
				{currentProducts.length > 0 ? (
					currentProducts.map((product) => (
						<div key={product.id} className={productCardStyle}>
							<ProductCarousel images={product.urls} />
							<h2>{product.alt_description}</h2>
							<p>
								Explore a variety of furniture pieces perfect for modern design.
							</p>
							<CustomDropdown
								productId={product.id}
								selectedOption={selectedOptions[product.id]}
								onOptionChange={handleDropdownChange}
							/>
							<Button>Add to Cart</Button>
						</div>
					))
				) : (
					<Spinner size="3" />
				)}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
};

export default ProductPage;
