import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { carouselWrapperStyle, imageStyle } from "../styles/ProductPageStyles";

interface ProductCarouselProps {
	images: string[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
	return (
		<div className={carouselWrapperStyle}>
			<Swiper
				pagination={{ clickable: true }}
				modules={[Pagination]}

			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img
							src={image}
							alt={`Product Image ${index + 1}`}
							className={imageStyle}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProductCarousel;
