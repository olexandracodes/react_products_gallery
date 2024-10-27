import React from "react";
import ProductPage from "./ProductPage";
import { Theme } from "@radix-ui/themes";

export default function Home() {
	return (
		<Theme>
			<ProductPage />
		</Theme>
	);
}
