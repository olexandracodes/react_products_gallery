import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "@radix-ui/themes";
import dynamic from "next/dynamic";

interface Product {
	alt_description: string;
	urls: string[];
}

const ProductDetails = () => {
	const router = useRouter();
	const { alt_description } = router.query;
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (router.isReady && alt_description) {
			const fetchProduct = async () => {
				setLoading(true);
				try {
					const response = await fetch(
						`https://api.unsplash.com/photos/random?query=${alt_description}&count=3`,
						{
							headers: {
								Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
							},
						}
					);

					if (!response.ok) {
						throw new Error("Failed to fetch product from Unsplash");
					}

					const data = await response.json();

					const productData: Product = {
						alt_description: alt_description as string,
						urls: data.map((item: any) => item.urls.small),
					};

					setProduct(productData);
				} catch (error) {
					console.error("Error fetching product:", error);
					setProduct(null);
				} finally {
					setLoading(false);
				}
			};

			fetchProduct();
		}
	}, [router.isReady, alt_description]);

	if (loading) return <Spinner size="3" />;

	if (!product) return <p>Product not found.</p>;

	return (
		<div>
			<button onClick={() => router.back()}>← Back</button>
			<h1>{product.alt_description}</h1>
			<div>
				{product.urls.map((url, index) => (
					<img
						key={index}
						src={url}
						alt={`${product.alt_description}-${index}`}
					/>
				))}
			</div>
		</div>
	);
};

export default dynamic(() => Promise.resolve(ProductDetails), { ssr: false });
