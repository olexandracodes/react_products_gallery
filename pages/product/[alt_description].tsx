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
    const { alt_description, images } = router.query;
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.isReady && images) {
          const imageUrls = JSON.parse(images as string);
          const productData: Product = {
            alt_description: alt_description as string,
            urls: imageUrls,
          };
          setProduct(productData);
          setLoading(false);
        }
      }, [router.isReady, images, alt_description]);

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
