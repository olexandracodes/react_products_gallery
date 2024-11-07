import React, { useEffect, useState } from "react";
import { Spinner, Button, Badge } from "@radix-ui/themes";
import {
	containerStyle,
	headerStyle,
	titleStyle,
	productContainer,
	productCardStyle,
	cartIconStyle,
	buttonContainerStyle,
	buttonStyle,
} from "../styles/ProductPageStyles";
import ProductCarousel from "../components/ProductCarousel";
import CustomDropdown from "../components/CustomDropdown";
import Pagination from "../components/Pagination";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { fetchProductImages } from "../src/api/fetchProductImages";

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
	const [loading, setLoading] = useState(true);
	const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set());

	useEffect(() => {
		const loadProductImages = async () => {
			setLoading(true);
			try {
				const products = await fetchProductImages();
				setProductData(products);
			} catch (error) {
				console.error("Error fetching images:", error);
				setProductData([]);
			} finally {
				setLoading(false);
			}
		};

		loadProductImages();
	}, []);

	const handleDropdownChange = (value: string, productId: string) => {
		setSelectedOptions((prev) => ({
			...prev,
			[productId]: value,
		}));
	};

	const handleAddToCart = (productId: string) => {
		setAddedProducts((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(productId)) {
				newSet.delete(productId);
			} else {
				newSet.add(productId);
			}
			return newSet;
		});
	};

	const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
	const currentProducts = productData.slice(
		startIndex,
		startIndex + PRODUCTS_PER_PAGE
	);
	const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

	return (
		<div className={containerStyle}>
			<div className={headerStyle}>
				<h1 className={titleStyle}>Product Gallery</h1>
				<FaShoppingCart className={cartIconStyle} />
			</div>

			<div className={productContainer}>
				{loading ? (
					<Spinner size="3" />
				) : currentProducts.length > 0 ? (
					currentProducts.map((product) => (
						<div key={product.id} className={productCardStyle}>
							<ProductCarousel images={product.urls} />
							<h2>{product.alt_description}</h2>
							<Badge variant="soft" color="blue">In stock</Badge>
							<p>
								Explore a variety of furniture pieces perfect for modern design.
							</p>

							<CustomDropdown
								productId={product.id}
								selectedOption={selectedOptions[product.id]}
								onOptionChange={handleDropdownChange}
							/>
							<div className={buttonContainerStyle}>
								{addedProducts.has(product.id) ? (
									<Button
										className={buttonStyle}
										onClick={() => handleAddToCart(product.id)}
									>
										+
									</Button>
								) : (
									<Button
										className={buttonStyle}
										onClick={() => handleAddToCart(product.id)}
									>
										Add to Cart
									</Button>
								)}
								<Link
									href={{
										pathname: `/product/${product.id}`,
										query: {
											name: product.alt_description,
											images: JSON.stringify(product.urls),
										},
									}}
								>
									<Button className={buttonStyle}>Details</Button>
								</Link>
							</div>
						</div>
					))
				) : (
					<p>No products found.</p>
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
