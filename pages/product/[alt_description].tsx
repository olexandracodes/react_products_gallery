import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spinner } from "@radix-ui/themes";

interface Product {
	alt_description: string;
	urls: string[];
}

const ProductDetails = () => {
	const router = useRouter();
	const { name, images } = router.query;
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (router.isReady && name && images) {
			const imageUrls = JSON.parse(images as string);
			const productData: Product = {
				alt_description: name as string,
				urls: imageUrls,
			};
			setProduct(productData);
			setLoading(false);
		}
	}, [router.isReady, name, images]);

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

export default ProductDetails;
